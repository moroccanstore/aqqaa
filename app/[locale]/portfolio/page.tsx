import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { strapiData } from "@/lib/strapi";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { portfolio } from "@/lib/data/portfolio";

type PortfolioCategory = "portraits" | "products" | "interior" | "food" | "family" | "events" | "landscape";

const categories: { name: string; slug: PortfolioCategory; description: string }[] = [
  { name: "Portraits", slug: "portraits", description: "Soulful portraiture and headshots." },
  { name: "Products", slug: "products", description: "High-end product and commercial photography." },
  { name: "Interior", slug: "interior", description: "Architecture and space storytelling." },
  { name: "Food", slug: "food", description: "Culinary arts and professional food styling." },
  { name: "Family", slug: "family", description: "Capturing the warmth of family and maternity." },
  { name: "Events", slug: "events", description: "Capturing the energy of live events and corporate gatherings." },
  { name: "Landscape", slug: "landscape", description: "The silent beauty of the natural world." },
];

import { ParticleHero } from "@/components/ParticleHero";

export const metadata = {
  title: "Portfolio | Said Aqqa Photography",
  description: "Explore our diverse portfolio of professional photography across various categories.",
};

export default async function PortfolioPage() {
  const strapiPortfolioRes = await strapiData.getPortfolio().catch(() => ({ data: [] }));
  const portfolioImages = strapiPortfolioRes?.data?.length > 0 ? strapiPortfolioRes.data : portfolio;
  return (
    <div className="bg-black pb-32">
      <ParticleHero 
        title="The Work"
        subtitle="A Gallery of Visual Excellence"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06db2b63-7330-4967-9232-2b2502a4c2da/DSC01752.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-serif">Portfolio Categories</h2>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto mt-12"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            // Get the first image from each category for the cover
            const coverImage = portfolioImages.find(img => img.category === cat.slug);
            
            return (
              <RevealOnScroll key={cat.slug} delay={index * 0.1}>
                <Link href={`/portfolio/${cat.slug}`} className="group block relative aspect-square overflow-hidden bg-zinc-900">
                  {coverImage && (
                    <Image
                      src={getCloudinaryUrl(coverImage.coverImage?.url || coverImage.images?.[0]?.url || "", { width: 800, quality: "auto" })}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-x-8 bottom-8">
                     <h3 className="text-2xl font-serif mb-2">{cat.name}</h3>
                     <p className="text-zinc-400 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        View Portfolio
                     </p>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}
