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

export const curatedPortfolioItems: PortfolioItem[] = [
  weddingHighlights[0],
  ...getCategoryItems("portraits", 0, 1, "/portfolio/portraits"),
  weddingHighlights[1],
  ...getCategoryItems("events", 0, 1, "/portfolio/events"),
  weddingHighlights[2],
  ...getCategoryItems("commercial", 0, 1, "/portfolio/products"),
  weddingHighlights[3],
  ...getCategoryItems("portraits", 1, 1, "/portfolio/portraits"),
  weddingHighlights[4],
  ...getCategoryItems("events", 1, 1, "/portfolio/events"),
  weddingHighlights[5],
  ...getCategoryItems("commercial", 1, 1, "/portfolio/products"),
  weddingHighlights[6],
  ...getCategoryItems("portraits", 2, 1, "/portfolio/portraits"),
  weddingHighlights[7],
  ...getCategoryItems("events", 2, 1, "/portfolio/events"),
  weddingHighlights[8],
  ...getCategoryItems("commercial", 2, 1, "/portfolio/products"),
  weddingHighlights[9],
  ...getCategoryItems("portraits", 3, 1, "/portfolio/portraits"),
  weddingHighlights[10],
  ...getCategoryItems("events", 3, 1, "/portfolio/events"),
  weddingHighlights[11],
  ...getCategoryItems("commercial", 3, 1, "/portfolio/products"),
  weddingHighlights[12],
  ...getCategoryItems("portraits", 4, 1, "/portfolio/portraits"),
  weddingHighlights[13],
  ...getCategoryItems("events", 4, 1, "/portfolio/events"),
  weddingHighlights[14],
  ...getCategoryItems("commercial", 4, 1, "/portfolio/products"),
];
