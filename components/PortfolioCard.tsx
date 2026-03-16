import React from "react";
import { Link } from "@/navigation";
import { CloudinaryImage } from "./CloudinaryImage";
import { PortfolioItem } from "@/lib/data/portfolio_data";
import { ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  const t = useTranslations("HomePage.labels");
  
  // Map internal labels to translation keys if they are generic
  const getTranslatedLabel = (label?: string) => {
    if (!label) return "";
    switch (label.toLowerCase()) {
      case "wedding story": return t("weddingStory");
      case "fine art portrait": return t("portraitSession");
      case "event coverage": return t("eventCoverage");
      case "commercial work": return t("commercialWork");
      default: return label;
    }
  };

  const CardContent = (
    <div className="group relative overflow-hidden bg-zinc-900 cursor-pointer mb-8 break-inside-avoid shadow-2xl">
      <CloudinaryImage
        src={item.url}
        alt={item.alt}
        width={item.width}
        height={item.height}
        quality={85}
        className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      
      {/* Top Left Label - Always visible as requested */}
      <div className="absolute top-6 left-6 z-20">
        <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-bold bg-black/40 px-3 py-1 backdrop-blur-sm border border-gold/20">
          {getTranslatedLabel(item.label)}
        </span>
      </div>

      {/* Bottom Content Area - Always visible title with serif font */}
      <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black via-black/60 to-transparent">
        <h3 className="text-2xl md:text-3xl text-white font-serif tracking-tight leading-tight mb-4 drop-shadow-md">
          {item.title}
        </h3>
        
        {/* View Details Button with Arrow - Elegant and always visible */}
        <div className="flex items-center gap-3 text-white/80 transition-colors duration-300">
          <span className="text-[10px] tracking-[0.3em] uppercase font-light border-b border-white/20 pb-1 transition-all">
            {t("viewDetail")}
          </span>
          <ArrowRight size={14} className="text-gold" />
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700 pointer-events-none" />
    </div>
  );

  if (item.href) {
    return <Link href={item.href as any}>{CardContent}</Link>;
  }

  return CardContent;
};
