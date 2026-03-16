/**
 * Cloudinary Fetch URL Helper
 * Optimizes images on the fly using Cloudinary's fetch feature.
 */
export const getCloudinaryUrl = (
  src: string,
  options: { width?: number; quality?: string | number; format?: string } = {}
) => {
  if (!src) return '';
  
  // If cloud name exists in future, use:
  // const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // if (cloudName && src.startsWith('http') && !src.includes('res.cloudinary.com')) {
  //   const params = `f_${options.format || 'auto'},q_${options.quality || 'auto'}${options.width ? `,w_${options.width}` : ''}`;
  //   return `https://res.cloudinary.com/${cloudName}/image/fetch/${params}/${encodeURIComponent(src)}`;
  // }

  // Next.js Image component handles optimization via remotePatterns in next.config.js
  return src;
};
