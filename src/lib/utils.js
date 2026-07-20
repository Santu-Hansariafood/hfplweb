import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Optimizes an image URL (especially Unsplash) for better performance
 * @param {string} url - Original image URL
 * @param {Object} options - Optimization options
 * @param {number} [options.width=1200] - Max width
 * @param {number} [options.quality=75] - Quality (0-100)
 * @param {string} [options.format='webp'] - Output format (webp, jpg, etc.)
 * @returns {string} Optimized image URL
 */
export function optimizeImageUrl(url, options = {}) {
  const { width = 1200, quality = 75, format = 'webp' } = options;
  
  // Handle Unsplash URLs
  if (url.includes('images.unsplash.com')) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('w', width.toString());
    urlObj.searchParams.set('q', quality.toString());
    urlObj.searchParams.set('fm', format);
    urlObj.searchParams.set('fit', 'crop');
    return urlObj.toString();
  }
  
  // Handle Pexels URLs
  if (url.includes('images.pexels.com')) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('w', width.toString());
    urlObj.searchParams.set('q', quality.toString());
    urlObj.searchParams.set('fm', format);
    return urlObj.toString();
  }
  
  return url;
}

/**
 * Generates a srcset for responsive images
 * @param {string} url - Original image URL
 * @param {number[]} [widths=[640, 960, 1280, 1920]] - Responsive widths
 * @returns {string} srcset string
 */
export function generateSrcset(url, widths = [640, 960, 1280, 1920]) {
  return widths.map(width => `${optimizeImageUrl(url, { width })} ${width}w`).join(', ');
}
