import React from "react";
import { notFound } from "next/navigation";
import { portfolioImages, PortfolioCategory } from "@/lib/data/portfolio";
import { MasonryGallery } from "@/components/MasonryGallery";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PortfolioCategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const categories: PortfolioCategory[] = ["products", "interior", "food", "family", "portraits", "events", "landscape"];
  return categories.map((cat) => ({
    slug: cat,
  }));
}

export async function generateMetadata({ params }: PortfolioCategoryPageProps) {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${categoryName} Portfolio | Said Aqqa Photography`,
    description: `Explore our professional ${params.slug} photography portfolio.`,
  };
}

export default function PortfolioCategoryPage({ params }: PortfolioCategoryPageProps) {
  const category = params.slug as PortfolioCategory;
  const images = portfolioImages.filter((img) => img.category === category);

  if (images.length === 0 && !["products", "interior", "food", "family", "portraits", "events", "landscape"].includes(params.slug)) {
    notFound();
  }

  const categoryTitle = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return (
    <div className="bg-black pt-40 pb-32 min-h-screen">
      <div className="container mx-auto px-6">
        <Link href="/portfolio" className="text-zinc-500 hover:text-gold flex items-center text-[10px] tracking-[0.3em] uppercase mb-12 transition-colors">
           <ChevronLeft size={16} className="mr-2" /> All Categories
        </Link>

        <RevealOnScroll className="mb-24">
          <h1 className="text-gold text-[10px] tracking-[0.6em] uppercase mb-6">{categoryTitle}</h1>
          <h2 className="text-5xl md:text-7xl font-serif">Photography Collection</h2>
          <div className="w-20 h-[1px] bg-gold/50 mt-12"></div>
        </RevealOnScroll>

        <MasonryGallery images={images} />
        
        {images.length === 0 && (
           <div className="py-40 text-center">
              <p className="text-zinc-500 font-light italic">Currently updating this collection. Check back soon.</p>
           </div>
        )}
      </div>
    </div>
  );
}
