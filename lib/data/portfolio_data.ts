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
const weddingHighlights = weddings.map((w, index) => ({
  id: `wedding-hl-${index}`,
  url: w.images[0]?.url || "",
  width: w.images[0]?.width || 1200,
  height: w.images[0]?.height || 800,
  alt: w.images[0]?.alt || w.title,
  category: "weddings" as const,
  title: w.title,
  label: "Wedding Story",
  href: `/weddings/${w.slug}`
}));

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
  const maxWeddings = Math.min(weddings.length, 24);
  const itemsPerCategory = 8;

  for (let i = 0; i < maxWeddings; i++) {
    if (weddingHighlights[i]) items.push(weddingHighlights[i]);
    
    // Interleave other categories
    if (i % 3 === 0) {
      const catIndex = Math.floor(i / 3);
      const portraits = getCategoryItems("portraits", catIndex, 1, "/portfolio/portraits");
      const events = getCategoryItems("events", catIndex, 1, "/portfolio/events");
      const commercial = getCategoryItems("commercial", catIndex, 1, "/portfolio/products");
      
      if (portraits.length) items.push(portraits[0]);
      if (events.length) items.push(events[0]);
      if (commercial.length) items.push(commercial[0]);
    }
  }
  return items;
};

export const curatedPortfolioItems: PortfolioItem[] = createCuratedList();
