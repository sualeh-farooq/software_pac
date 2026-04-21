import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const srcDir = path.join(root, "src");

function walk(dir) {
  /** @type {string[]} */
  let out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out = out.concat(walk(p));
    else if (/\.(ts|tsx|js|jsx|mts)$/.test(ent.name)) out.push(p);
  }
  return out;
}

const files = walk(srcDir).map((f) => path.normalize(f));
const fileSet = new Set(files);

function readUtf8(p) {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return "";
  }
}

const importRe = /\bfrom\s+["']([^"']+)["']/g;
const dynRe = /\bimport\(\s*["']([^"']+)["']\s*\)/g;
const reqRe = /\brequire\(\s*["']([^"']+)["']\s*\)/g;

function resolveAsFile(base) {
  const exts = [".ts", ".tsx", ".js", ".jsx", ".mts"];

  if (fs.existsSync(base) && fs.statSync(base).isFile()) return path.normalize(base);
  for (const ext of exts) {
    const p = base + ext;
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return path.normalize(p);
  }

  if (fs.existsSync(base) && fs.statSync(base).isDirectory()) {
    for (const ext of exts) {
      const p = path.join(base, "index" + ext);
      if (fs.existsSync(p) && fs.statSync(p).isFile()) return path.normalize(p);
    }
  }

  return null;
}

function resolveSpecifier(fromFile, spec) {
  if (!spec) return null;
  if (spec.startsWith("@/")) return resolveAsFile(path.join(srcDir, spec.slice(2)));
  if (spec.startsWith("./") || spec.startsWith("../")) {
    return resolveAsFile(path.resolve(path.dirname(fromFile), spec));
  }
  return null; // package import
}

/** @type {Map<string, string[]>} */
const graph = new Map();

for (const f of files) {
  const txt = readUtf8(f);
  /** @type {Set<string>} */
  const deps = new Set();

  for (const re of [importRe, dynRe, reqRe]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(txt))) {
      const resolved = resolveSpecifier(f, m[1]);
      if (resolved && fileSet.has(resolved)) deps.add(resolved);
    }
  }

  graph.set(f, [...deps]);
}

const entries = files.filter((f) => {
  const posix = f.replace(/\\/g, "/");
  if (!posix.includes("/src/app/")) return false;
  const bn = path.posix.basename(posix);
  return (
    /^(page|layout|template|loading|error|not-found)\.(ts|tsx|js|jsx|mts)$/.test(bn) ||
    bn === "route.ts" ||
    bn === "route.tsx" ||
    bn === "sitemap.ts" ||
    bn === "sitemap.tsx"
  );
});

/** @type {Set<string>} */
const reachable = new Set();
const stack = [...entries];

while (stack.length) {
  const cur = stack.pop();
  if (!cur || reachable.has(cur)) continue;
  reachable.add(cur);
  for (const dep of graph.get(cur) ?? []) {
    if (!reachable.has(dep)) stack.push(dep);
  }
}

function under(p, dir) {
  const pn = p.replace(/\\/g, "/");
  const dn = dir.replace(/\\/g, "/");
  return pn.startsWith(dn.endsWith("/") ? dn : dn + "/");
}

const componentsDir = path.normalize(path.join(srcDir, "components"));
const constantsDir = path.normalize(path.join(srcDir, "constants"));
const typesDir = path.normalize(path.join(srcDir, "types"));

const unusedComponents = files.filter((f) => under(f, componentsDir) && !reachable.has(f));
const unusedConstants = files.filter((f) => under(f, constantsDir) && !reachable.has(f));
const unusedTypes = files.filter((f) => under(f, typesDir) && !reachable.has(f));

console.log(
  JSON.stringify(
    {
      unusedComponents,
      unusedConstants,
      unusedTypes,
      counts: {
        entries: entries.length,
        reachable: reachable.size,
        unusedComponents: unusedComponents.length,
        unusedConstants: unusedConstants.length,
        unusedTypes: unusedTypes.length,
      },
    },
    null,
    2,
  ),
);

