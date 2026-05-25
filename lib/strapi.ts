/**
 * Strapi API Client
 * Handles fetching content from the local Strapi instance.
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchStrapi(path: string, options: Record<string, string> = {}) {
  try {
    const queryString = Object.keys(options).length
      ? '?' + new URLSearchParams(options).toString()
      : '';

    const response = await fetch(`${STRAPI_URL}/api/${path}${queryString}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Strapi Fetch Error [${response.status}]: ${response.statusText} — ${STRAPI_URL}/api/${path}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    return null;
  }
}

export const strapiData = {
  // Collection types
  getTestimonials: () => fetchStrapi('testimonials?populate=*'),
  getWeddings: () => fetchStrapi('weddings?populate=*&sort=date:desc&pagination[limit]=100'),
  getWeddingBySlug: (slug: string) => fetchStrapi(`weddings?filters[slug][$eq]=${slug}&populate=*`),
  getPortfolio: () => fetchStrapi('portfolios?populate=*'),
  getJournals: () => fetchStrapi('journals?populate=*&sort=publishDate:desc'),
  getJournalBySlug: (slug: string) => fetchStrapi(`journals?filters[slug][$eq]=${slug}&populate=*`),
  getVideos: () => fetchStrapi('videos?populate=*&sort=createdAt:desc'),
  
  // Single types
  getHomepage: () => fetchStrapi('homepage?populate=*'),
  getPricing: () => fetchStrapi('pricing?populate=*'),
  getFaq: () => fetchStrapi('faq?populate=*'),
  getContact: () => fetchStrapi('contact?populate=*'),
  getAbout: () => fetchStrapi('about?populate=*'),
  getPrivacy: () => fetchStrapi('privacy?populate=*'),
  getTerms: () => fetchStrapi('terms?populate=*'),
  getGlobalSettings: () => fetchStrapi('global?populate=*'),
};
