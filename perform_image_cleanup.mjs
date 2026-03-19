import fs from 'fs/promises';
import path from 'path';

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function main() {
  const root = path.resolve('.');
  const srcPath = path.resolve('src');
  const publicPath = path.resolve('public');
  const imagesTsPath = path.resolve('public/Images.ts');

  const imagesTsContent = await fs.readFile(imagesTsPath, 'utf-8');

  // 1. Extract imports
  const importRegex = /import\s+(\w+)\s+from\s+["'](.+?)["']/g;
  const imageImports = {};
  let match;
  while ((match = importRegex.exec(imagesTsContent)) !== null) {
    const [_, variable, importPath] = match;
    let fullPath;
    if (importPath.startsWith('./')) {
        fullPath = path.resolve(publicPath, importPath.slice(2));
    } else {
        fullPath = path.resolve(publicPath, importPath);
    }
    imageImports[variable] = fullPath;
  }

  // 2. Extract keys of the exported Images object
  const exportMatch = /export\s+const\s+Images\s+=\s+\{([\s\S]+?)\}/.exec(imagesTsContent);
  if (!exportMatch) throw new Error("Could not find export const Images");
  
  const rawKeys = exportMatch[1].split(',').map(k => k.trim()).filter(k => k && !k.startsWith('//'));

  // 3. Search for usages in src/
  const allSrcFiles = await getFiles(srcPath);
  const srcContents = await Promise.all(allSrcFiles.map(async f => {
    if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.css')) {
        return await fs.readFile(f, 'utf-8');
    }
    return '';
  }));

  const usedKeys = new Set();
  const unusedKeys = [];

  for (const key of rawKeys) {
    const usageRegex = new RegExp(`Images\\.${key}\\b`, 'g');
    let isUsed = false;
    for (const content of srcContents) {
      if (usageRegex.test(content)) {
        isUsed = true;
        break;
      }
    }
    
    if (isUsed) {
      usedKeys.add(key);
    } else {
      unusedKeys.push(key);
    }
  }

  // 4. Generate NEW Images.ts content
  // We keep only imports that are used
  const newImports = [];
  const processedImports = new Set();
  
  // Re-read file to preserve comments/order as much as possible?
  // Actually, easier to just filter the lines.
  const lines = imagesTsContent.split('\n');
  const filteredLines = [];
  let inExport = false;

  for (const line of lines) {
      const impMatch = /import\s+(\w+)\s+from/.exec(line);
      if (impMatch) {
          if (usedKeys.has(impMatch[1])) {
              filteredLines.push(line);
          }
          continue;
      }

      if (line.includes('export const Images = {')) {
          inExport = true;
          filteredLines.push(line);
          continue;
      }

      if (inExport) {
          if (line.includes('}')) {
              inExport = false;
              filteredLines.push(line);
              continue;
          }
          const keyMatch = /^\s*(\w+),?/.exec(line);
          if (keyMatch) {
              if (usedKeys.has(keyMatch[1])) {
                  filteredLines.push(`\t${keyMatch[1]},`);
              }
              continue;
          }
      }

      // Keep other things (comments, empty lines, uptime import)
      if (!inExport) {
          filteredLines.push(line);
      }
  }

  const finalContent = filteredLines.join('\n').replace(/\n{3,}/g, '\n\n');
  await fs.writeFile(imagesTsPath, finalContent);
  console.log("Updated public/Images.ts");

  // 5. Delete physical files
  const filesToDelete = new Set();
  
  // orphanedFiles logic
  const importedPathsInNewFile = new Set();
  for (const key of usedKeys) {
      if (imageImports[key]) importedPathsInNewFile.add(path.normalize(imageImports[key]));
  }

  const assetsPath = path.resolve('public/assets');
  const allAssetFiles = (await getFiles(assetsPath)).concat(await fs.readdir(publicPath, { withFileTypes: true }).then(entries => entries.filter(e => !e.isDirectory()).map(e => path.resolve(publicPath, e.name))));

  for (const file of allAssetFiles) {
      const normFile = path.normalize(file);
      if (normFile === path.normalize(imagesTsPath)) continue;
      if (normFile.endsWith('.html') || normFile.endsWith('.txt')) continue; // robots.txt
      if (path.basename(normFile) === 'favicon.png') continue;

      if (!importedPathsInNewFile.has(normFile)) {
          filesToDelete.add(normFile);
      }
  }

  for (const file of filesToDelete) {
      try {
          // Double check it's not actually used by some other means (unlikely)
          await fs.unlink(file);
          console.log(`Deleted: ${path.relative(root, file)}`);
      } catch (err) {
          console.error(`Error deleting ${file}: ${err.message}`);
      }
  }
}

main().catch(console.error);
