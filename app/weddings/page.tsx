import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { weddings, Wedding } from "@/lib/data/weddings";
import { getCloudinaryUrl } from "@/lib/cloudinary";

import { ParticleHero } from "@/components/ParticleHero";

export const metadata = {
  title: "Weddings | Said Aqqa Photography",
  description: "Explore our collection of luxury wedding stories captured across Finland and beyond.",
};

export default function WeddingsPage() {
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
          <h2 className="text-5xl md:text-7xl font-serif">The Collections</h2>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto mt-12"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {weddings.map((wedding: Wedding, index: number) => (
            <RevealOnScroll key={wedding.slug} delay={index % 2 * 0.1}>
              <Link href={`/weddings/${wedding.slug}`} className="group block">
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden mb-8 bg-zinc-900">
                  <Image
                    src={getCloudinaryUrl(wedding.images[0].url, { width: 1000, quality: "auto" })}
                    alt={wedding.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
