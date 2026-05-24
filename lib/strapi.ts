/**
 * Strapi API Client
 * Handles fetching content from the local Strapi instance.
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchStrapi(path: string, urlParamsObject = {}) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${path}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Strapi Fetch Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    return null;
  }
}

export const strapiData = {
  getTestimonials: () => fetchStrapi('testimonials?populate=*'),
  getWeddings: () => fetchStrapi('weddings?populate=*'),
  getPortfolio: () => fetchStrapi('portfolios?populate=*'),
  getJournal: () => fetchStrapi('journals?populate=*'),
  getHomepage: () => fetchStrapi('homepage?populate=*'),
  getPricing: () => fetchStrapi('pricing?populate=*'),
  getFaq: () => fetchStrapi('faq?populate=*'),
  getContact: () => fetchStrapi('contact?populate=*'),
};
