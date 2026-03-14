/**
 * Cloudinary Fetch URL Helper
 * Optimizes images on the fly using Cloudinary's fetch feature.
 */
export const getCloudinaryUrl = (
  src: string,
  { width, quality = 'auto', format = 'auto' }: { width?: number; quality?: string | number; format?: string } = {}
) => {
  if (!src) return '';
  
  // If already a Cloudinary URL or relative, return as is (for now assuming external fetches)
  if (src.includes('res.cloudinary.com')) return src;

  const params = [
    `f_${format}`,
    `q_${quality}`,
    width ? `w_${width}` : '',
    'c_limit'
  ].filter(Boolean).join(',');

  // Using a demo cloud name or placeholder if not provided - USER should provide their cloud name
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';
  
  return `https://res.cloudinary.com/${cloudName}/image/fetch/${params}/${encodeURIComponent(src)}`;
};
