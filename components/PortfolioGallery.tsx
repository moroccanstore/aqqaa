"use client";

import React, { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { PortfolioCard } from "./PortfolioCard";
import { RevealOnScroll } from "./AnimationWrappers";
import { curatedPortfolioItems } from "@/lib/data/portfolio_data";

type Category = "all" | "weddings" | "portraits" | "events" | "commercial";

export const PortfolioGallery: React.FC = () => {
  const t = useTranslations("HomePage");
  const [activeCategory, setActiveCategory] = useState<Category>("weddings");

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: t("filterAll") },
    { id: "weddings", label: t("filterWeddings") },
    { id: "portraits", label: t("filterPortraits") },
    { id: "events", label: t("filterEvents") },
    { id: "commercial", label: t("filterCommercial") },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return curatedPortfolioItems;
    return curatedPortfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 bg-black overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-16 text-center lg:text-left">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase block mb-4">
            {t("portfolioOptions")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            {t("selectedWorks")}
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative py-2 text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                  activeCategory === cat.id ? "text-gold" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold/50" />
                )}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Gallery Grid - Masonry style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
