import React from "react";
import { Link } from "@/navigation";
import { CloudinaryImage } from "./CloudinaryImage";
import { PortfolioItem } from "@/lib/data/portfolio_data";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  const CardContent = (
    <div className="group relative overflow-hidden bg-zinc-900 cursor-pointer mb-8 break-inside-avoid">
      <CloudinaryImage
        src={item.url}
        alt={item.alt}
        width={800}
        height={1000}
        quality={85}
        className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      
      {/* Premium Overlay with glassmorphism effect on hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px] flex items-center justify-center">
        {/* Centered View Detail Button */}
        <div className="btn-liquid border border-white/20 px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          <span className="text-white text-[10px] tracking-[0.3em] font-light uppercase">View Detail</span>
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        <div className="relative z-10">
          <span className="text-gold text-[10px] tracking-[0.3em] uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
            {item.label}
          </span>
          <h3 className="text-xl md:text-2xl text-white font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
            {item.title}
          </h3>
          <div className="w-12 h-[1px] bg-gold/50 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-400 origin-left" />
        </div>
      </div>
      
      {/* Subtle bottom gradient for readability even when not hovered */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
    </div>
  );

  if (item.href) {
    return <Link href={item.href as any}>{CardContent}</Link>;
  }

  return CardContent;
};
