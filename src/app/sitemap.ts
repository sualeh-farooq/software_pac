import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://youritcompany.com'
    const now = new Date()
    return [
        { url: `${baseUrl}/`, priority: 1.0, lastModified: now },
        { url: `${baseUrl}/services`, priority: 0.9, lastModified: now },
        { url: `${baseUrl}/about`, priority: 0.85, lastModified: now },
        { url: `${baseUrl}/contact`, priority: 0.85, lastModified: now },
        { url: `${baseUrl}/terms`, priority: 0.6, lastModified: now },
        { url: `${baseUrl}/privacy`, priority: 0.6, lastModified: now },
    ]
}