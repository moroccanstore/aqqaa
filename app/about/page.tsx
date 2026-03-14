import React from "react";
import Image from "next/image";
import { RevealOnScroll, ParallaxSection } from "@/components/AnimationWrappers";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { aboutData } from "@/lib/data/about";
import { CloudinaryImage } from "@/components/CloudinaryImage";

import { ParticleHero } from "@/components/ParticleHero";

export const metadata = {
  title: "About | Said Aqqa Photography",
  description: "Learn more about Said Aqqa, a luxury wedding and portrait photographer based in Helsinki.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title={aboutData.title}
        subtitle={aboutData.subtitle}
        backgroundImage={getCloudinaryUrl(aboutData.heroImage, { width: 1920, quality: "auto" })}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        {/* Intro */}
        <section className="flex flex-col md:flex-row items-center gap-20 mb-40">
           <div className="flex-1">
              <RevealOnScroll>
                 <h1 className="text-gold text-[10px] tracking-[0.6em] uppercase mb-8">{aboutData.intro.title}</h1>
                 <h2 className="text-5xl md:text-8xl font-serif leading-tight mb-12">{aboutData.intro.heading}</h2>
                 <p className="text-zinc-400 font-light leading-relaxed text-xl max-w-xl">
                    {aboutData.intro.bio}
                 </p>
              </RevealOnScroll>
           </div>
           
           <div className="flex-1 w-full max-w-md mx-auto">
              <ParallaxSection speed={0.05}>
                 <div className="relative aspect-[4/5] overflow-hidden">
                    <Image 
                      src={getCloudinaryUrl(aboutData.intro.image, { width: 800 })}
                      alt="Said Aqqa profile"
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover grayscale"
                    />
                 </div>
              </ParallaxSection>
           </div>
        </section>

        {/* Philosophy */}
        <section className="mb-40 border-t border-white/5 pt-40">
           <div className="max-w-4xl mx-auto text-center">
              <RevealOnScroll>
                 <h3 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8">My Philosophy</h3>
                 <p className="text-3xl md:text-5xl font-serif italic leading-snug text-zinc-300">
                    "{aboutData.philosophy}"
                 </p>
              </RevealOnScroll>
           </div>
        </section>

        {/* Experience / Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-20 bg-zinc-950 border border-white/5 px-10">
           {aboutData.stats.map((stat, index) => (
             <RevealOnScroll key={stat.label} delay={(index + 1) * 0.1}>
                <div className="text-5xl font-serif text-gold mb-4">{stat.value}</div>
                <div className="text-zinc-500 text-[10px] tracking-widest uppercase">{stat.label}</div>
             </RevealOnScroll>
           ))}
        </section>
        {/* Process Gallery */}
        <section className="mt-40">
           <RevealOnScroll className="text-center mb-20">
              <h3 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">Behind the Scenes</h3>
              <h4 className="text-4xl font-serif">My Process</h4>
           </RevealOnScroll>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {aboutData.processGallery.map((img, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                   <div className="relative aspect-[3/4] group">
                      <CloudinaryImage 
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                         <span className="text-white text-[10px] tracking-widest uppercase border border-white/20 px-4 py-2">{img.alt}</span>
                      </div>
                   </div>
                </RevealOnScroll>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
