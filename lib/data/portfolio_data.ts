import { portfolioImages } from "./portfolio";
import { weddings } from "./weddings";

export interface PortfolioItem {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
  category: "weddings" | "portraits" | "events" | "commercial";
  title: string;
  label?: string;
  href?: string;
}

// Map existing categories to our new required categories
const mapCategory = (cat: string): "weddings" | "portraits" | "events" | "commercial" | null => {
  switch (cat) {
    case "portraits":
    case "family":
      return "portraits";
    case "events":
      return "events";
    case "products":
    case "interior":
    case "food":
      return "commercial";
    default:
      return null;
  }
};

// Get first image from each wedding as a highlight
// Get more highlight images from each wedding to fill the gallery
const weddingHighlights = weddings.flatMap((w, index) => {
  // Take up to 4 images from each wedding to provide a richer preview
  return w.images.slice(0, 4).map((img, imgIndex) => ({
    id: `wedding-hl-${index}-${imgIndex}`, 
    url: img.url,
    width: img.width,
    height: img.height,
    alt: img.alt || w.title,
    category: "weddings" as const,
    title: w.title,
    label: "Wedding Story",
    href: `/weddings/${w.slug}`
  }));
});

const getCategoryItems = (cat: "portraits" | "events" | "commercial", startIndex: number, count: number, href: string) => 
  portfolioImages
    .filter(img => mapCategory(img.category) === cat)
    .slice(startIndex, startIndex + count)
    .map((img, i) => ({
      id: `${cat}-${startIndex + i}`,
      url: img.url,
      width: img.width,
      height: img.height,
      alt: img.alt,
      category: cat,
      title: img.title || (cat === "portraits" ? "Essence of Being" : cat === "events" ? "Dynamic Moments" : "Brand Vision"),
      label: img.subtitle || (cat === "portraits" ? "Fine Art Portrait" : cat === "events" ? "Event Coverage" : "Commercial Work"),
      href
    }));

// Construct a richer curated list by iterating more extensively through available data
const createCuratedList = () => {
  const items: PortfolioItem[] = [];
  const totalWeddings = weddings.length;
  
  // Use a targeted filter with exact match logic to avoid duplicates from similar prefixes
  for (let i = 0; i < totalWeddings; i++) {
    // Safer: check the exact part of the ID
    const safeMatches = weddingHighlights.filter(h => {
        const parts = h.id.split('-');
        return parts[0] === 'wedding' && parts[1] === 'hl' && parts[2] === String(i);
    });
    
    items.push(...safeMatches);
    
    // Interleave other categories more densely without creating huge overlaps
    const portraits = getCategoryItems("portraits", i * 3, 3, "/portfolio/portraits");
    const events = getCategoryItems("events", i * 3, 3, "/portfolio/events");
    const commercial = getCategoryItems("commercial", i * 3, 3, "/portfolio/products");
    
    items.push(...portraits);
    items.push(...events);
    items.push(...commercial);
  }
  
  // CRITICAL: Ensure every URL is unique across the final list to prevent layout gaps
  // and visual repetition. We prefer earlier items (highlights) over later ones.
  const uniqueByUrl = new Map<string, PortfolioItem>();
  for (const item of items) {
    if (!uniqueByUrl.has(item.url)) {
      uniqueByUrl.set(item.url, item);
    }
  }
  
  const finalItems = Array.from(uniqueByUrl.values());
  
  // Return a healthy amount for the masonry (approx 80-100 unique items is plenty for a dense look)
  return finalItems.slice(0, 100); 
};

export const curatedPortfolioItems: PortfolioItem[] = createCuratedList();
