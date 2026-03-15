import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'fi'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(request: NextRequest) {
  // Cloudflare and Vercel often provide IP geolocation headers.
  // We prioritize CF-IPCountry for Cloudflare deployments.
  const country = request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country');

  // If the request targets the root `/`, we can intercept and redirect based on geo
  if (request.nextUrl.pathname === '/') {
    if (country === 'FI') {
      request.nextUrl.pathname = '/fi';
      return Response.redirect(request.nextUrl);
    }
  }

  // Otherwise, fallback to standard next-intl language detection via Accept-Language
  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized.
  // This matches all paths except /api, /_next, and static files.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
