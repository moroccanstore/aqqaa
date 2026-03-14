/**
 * Cloudinary Fetch URL Helper
 * Optimizes images on the fly using Cloudinary's fetch feature.
 */
export const getCloudinaryUrl = (
  src: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: { width?: number; quality?: string | number; format?: string } = {}
) => {
  if (!src) return '';
  
  // Directly return original URL as Cloudinary Fetch API is returning 404s
  // Next.js Image component will handle optimization via remotePatterns
  return src;
};
