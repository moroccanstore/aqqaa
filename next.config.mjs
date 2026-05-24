import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/portfoliogridoverlayl.html', destination: '/weddings', permanent: true },
      { source: '/videos.html', destination: '/videos', permanent: true },
      { source: '/work.html', destination: '/portfolio', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact-1.html', destination: '/contact', permanent: true },
      { source: '/price.html', destination: '/pricing', permanent: true },
      { source: '/produvys.html', destination: '/portfolio/products', permanent: true },
      { source: '/portfolio-1.html', destination: '/portfolio/interior', permanent: true },
      { source: '/portfolio-1-1.html', destination: '/portfolio/food', permanent: true },
      { source: '/portfolio-2.html', destination: '/portfolio/family', permanent: true },
      { source: '/portraits.html', destination: '/portfolio/portraits', permanent: true },
      { source: '/events.html', destination: '/portfolio/events', permanent: true },
      { source: '/portfolio-1-3.html', destination: '/portfolio/landscape', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
