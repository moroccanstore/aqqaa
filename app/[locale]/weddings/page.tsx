import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { weddings } from "@/lib/data/weddings";
import { strapiData } from "@/lib/strapi";
import { getCloudinaryUrl } from "@/lib/cloudinary";

import { ParticleHero } from "@/components/ParticleHero";

export const metadata = {
  title: "Wedding Photography Collections | Said Aqqa",
  description: "Explore a curated collection of luxury wedding stories captured in Helsinki, Finland, and iconic destinations worldwide.",
};

export default async function WeddingsPage() {
  const { data: strapiWeddings = [] } = await strapiData.getWeddings().catch(() => ({ data: [] }));
  const activeWeddings = strapiWeddings.length > 0 ? strapiWeddings : weddings;

  return (
    <div className="bg-black pb-32">
      <ParticleHero 
        title="Wedding Stories"
        subtitle="Capturing Love in Helsinki & Beyond"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06a12517-d328-43dc-960e-8d9cc5e282a6/SAI01269-2.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-serif">Wedding Stories</h1>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto mt-12"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {activeWeddings.map((wedding: any, index: number) => (
            <RevealOnScroll key={wedding.slug} delay={index % 2 * 0.1}>
              <Link href={`/weddings/${wedding.slug}`} className="group block">
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden mb-8 bg-zinc-900">
                  <Image
                    src={getCloudinaryUrl(wedding.images?.[0]?.url || "", { width: 1000, quality: "auto" })}
                    alt={wedding.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="flex justify-between items-baseline">
                   <h3 className="text-2xl font-serif">{wedding.title}</h3>
                   <span className="text-gold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      View Collection
                   </span>
                </div>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mt-4">
                  {wedding.images.length} Photographs
                </p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
