import React from "react";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { Check } from "lucide-react";
import Image from "next/image";

import { ParticleHero } from "@/components/ParticleHero";
import { pricingData } from "@/lib/data/pricing";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { CloudinaryImage } from "@/components/CloudinaryImage";

export const metadata = {
  title: "Investment | Said Aqqa Photography",
  description: "View pricing and investment options for luxury wedding and portrait photography.",
};


export default function PricingPage() {
  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title="Your Legacy"
        subtitle="Investment & Services"
        backgroundImage={getCloudinaryUrl(pricingData.heroImage, { width: 1920, quality: "auto" })}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="max-w-4xl mx-auto text-center mb-24">
           <h2 className="text-5xl md:text-7xl font-serif leading-tight">Preserving Your Legacy</h2>
           <p className="text-zinc-500 font-light mt-12 text-lg italic">
             "Photography is an investment in your memories. Each package is tailored to provide the highest level of service and artistic excellence."
           </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
           {pricingData.packages.map((pkg, index) => (
             <RevealOnScroll 
               key={pkg.name} 
               delay={index * 0.1}
               className={`relative flex flex-col p-12 bg-zinc-950 border transition-all duration-500 hover:border-gold/50 ${
                  pkg.featured ? "border-gold/30 scale-105 z-10" : "border-white/5"
               }`}
             >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] tracking-widest uppercase px-6 py-2">
                    Most Requested
                  </div>
                )}
                
                <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                <p className="text-gold text-[10px] tracking-widest uppercase mb-8">{pkg.duration}</p>
                
                <div className="text-4xl font-serif mb-12">
                   {pkg.price}
                   <span className="text-[10px] text-zinc-600 block mt-2 tracking-widest uppercase">Starting from</span>
                </div>

                <ul className="space-y-6 flex-1 mb-12">
                   {pkg.features.map(feature => (
                     <li key={feature} className="flex items-start space-x-4 text-sm text-zinc-400 font-light">
                        <Check size={16} className="text-gold mt-1 shrink-0" />
                        <span>{feature}</span>
                     </li>
                   ))}
                </ul>

                {/* Visual Proof Mini-Gallery */}
                <div className="flex gap-2 mb-12 h-20">
                   {pkg.proofGallery?.map((img: any, i: number) => (
                     <div key={i} className="flex-1 grayscale hover:grayscale-0 transition-all duration-500">
                       <CloudinaryImage 
                         src={img.url}
                         alt="Quality Sample"
                         fill
                         className="w-full h-full"
                       />
                     </div>
                   ))}
                </div>

                <a href="/contact" className={`btn-liquid text-center py-5 text-[10px] tracking-[0.4em] uppercase transition-all duration-500 ${
                  pkg.featured ? "bg-gold text-black hover:border-white" : "border border-white/20 hover:border-gold"
                }`}>
                   Reserve Date
                </a>
             </RevealOnScroll>
           ))}
        </div>

        {/* Custom Quote Section */}
        <section className="mt-40 text-center">
           <RevealOnScroll>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase mb-6">Need something bespoke?</h4>
              <p className="text-2xl md:text-4xl font-serif mb-12">We offer custom collections for destination weddings and multi-day events.</p>
              <a href="/contact" className="text-gold border-b border-gold/30 pb-2 hover:text-white hover:border-white transition-all text-sm tracking-widest uppercase">
                 Inquire for a Custom Quote
              </a>
           </RevealOnScroll>
        </section>
      </div>
    </div>
  );
}
