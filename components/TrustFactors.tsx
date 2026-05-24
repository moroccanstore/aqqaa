import React from "react";
import Image from "next/image";
import { RevealOnScroll } from "./AnimationWrappers";

const trustImages = [
  "/trustfactors/13.png",
  "/trustfactors/14.png",
  "/trustfactors/15.png",
  "/trustfactors/16.png",
  "/trustfactors/17.png",
  "/trustfactors/18.png",
  "/trustfactors/19.png",
  "/trustfactors/20.png",
  "/trustfactors/21.png",
  "/trustfactors/embassy-morocco.png",
];

export const TrustFactors = () => {
  return (
    <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <RevealOnScroll className="text-center">
          <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">Recognized Excellence</h2>
          <h3 className="text-2xl md:text-3xl font-serif text-white/90">Featured Publications & Partnerships</h3>
        </RevealOnScroll>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* First track */}
        <div className="flex space-x-20 animate-marquee whitespace-nowrap py-8">
          {trustImages.map((src, i) => (
            <div key={`trust-1-${i}`} className="relative flex-shrink-0 w-36 h-20 md:w-52 md:h-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer">
              <Image
                src={src}
                alt="Trust logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 144px, 208px"
              />
            </div>
          ))}
        </div>
        
        {/* Second track (duplicate for seamless loop) */}
        <div className="flex space-x-20 animate-marquee whitespace-nowrap py-8 ml-20" aria-hidden="true">
          {trustImages.map((src, i) => (
            <div key={`trust-2-${i}`} className="relative flex-shrink-0 w-36 h-20 md:w-52 md:h-28 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer">
              <Image
                src={src}
                alt="Trust logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 144px, 208px"
              />
            </div>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
