import { MetadataRoute } from 'next';
import { strapiData } from '@/lib/strapi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saidaqqa.com';
  const locales = ['en', 'fi'];
  
  const staticRoutes = [
    '',
    '/weddings',
    '/portfolio',
    '/videos',
    '/pricing',
    '/contact',
    '/about',
    '/journal',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages
  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  // Dynamic journal posts
  try {
    const journalRes = await strapiData.getJournals().catch(() => ({ data: [] }));
    const posts = journalRes?.data ?? [];
    locales.forEach((locale) => {
      posts.forEach((post: any) => {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/journal/${post.slug}`,
          lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    });
  } catch (_) {
    // Strapi not running — skip dynamic journal entries at build time
  }

  // Dynamic wedding pages
  try {
    const weddingRes = await strapiData.getWeddings().catch(() => ({ data: [] }));
    const weddings = weddingRes?.data ?? [];
    locales.forEach((locale) => {
      weddings.forEach((w: any) => {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/weddings/${w.slug}`,
          lastModified: w.updatedAt ? new Date(w.updatedAt) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    });
  } catch (_) {
    // Strapi not running — skip
  }

  return sitemapEntries;
}
