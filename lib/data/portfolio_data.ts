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
  // Take up to 3 images from each wedding to provide a richer preview
  return w.images.slice(0, 3).map((img, imgIndex) => ({
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
  const maxWeddings = weddings.length;
  
  // Interleave wedding highlights with other categories more densely
  for (let i = 0; i < maxWeddings; i++) {
    // Add all highlights for this wedding (we took 3 per wedding above)
    const weddingMatches = weddingHighlights.filter(h => h.id.startsWith(`wedding-hl-${i}-`));
    items.push(...weddingMatches);
    
    // Interleave other categories more frequently
    const portraits = getCategoryItems("portraits", i * 2, 2, "/portfolio/portraits");
    const events = getCategoryItems("events", i * 2, 2, "/portfolio/events");
    const commercial = getCategoryItems("commercial", i * 2, 2, "/portfolio/products");
    
    items.push(...portraits);
    items.push(...events);
    items.push(...commercial);
  }
  
  // Provide a fallback if list is still too short (highly unlikely now)
  return items.slice(0, 80); 
};

export const curatedPortfolioItems: PortfolioItem[] = createCuratedList();
