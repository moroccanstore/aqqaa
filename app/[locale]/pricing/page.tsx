import React from "react";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { Check } from "lucide-react";
import { useTranslations } from 'next-intl';

import { ParticleHero } from "@/components/ParticleHero";
import { pricingData } from "@/lib/data/pricing";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { strapiData } from "@/lib/strapi";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Pricing.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PricingPage() {
  const t = await getTranslations('Pricing');
  const strapiPricingRes = await strapiData.getPricing().catch(() => ({ data: null }));
  const cmsPricing = strapiPricingRes?.data || {};

  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title={cmsPricing.title || t('heroTitle')}
        subtitle={cmsPricing.subtitle || t('heroSubtitle')}
        backgroundImage={getCloudinaryUrl(cmsPricing.heroImage?.url || pricingData.heroImage, { width: 1920, quality: "auto" })}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="max-w-4xl mx-auto text-center mb-24">
           <h2 className="text-5xl md:text-7xl font-serif leading-tight">{t('sectionTitle')}</h2>
           <p className="text-zinc-500 font-light mt-12 text-lg italic">
             "{cmsPricing.description || t('sectionDescription')}"
           </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
           {pricingData.packages.map((pkg: any, index: number) => (
             <RevealOnScroll 
               key={pkg.id} 
               delay={index * 0.1}
               className={`relative flex flex-col p-8 bg-zinc-950 border transition-all duration-500 hover:border-gold/50 ${
                  pkg.featured ? "border-gold/30 lg:scale-105 z-10 shadow-2xl shadow-gold/5" : "border-white/5"
               }`}
             >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] tracking-widest uppercase px-6 py-2 whitespace-nowrap">
                    Most Requested
                  </div>
                )}
                
                <h3 className="text-xl font-serif mb-2">{t(`${pkg.id}.name`)}</h3>
                <p className="text-gold text-[9px] tracking-widest uppercase mb-6">{t(`${pkg.id}.duration`)}</p>
                
                <div className="text-3xl font-serif mb-8">
                   {pkg.price}
                   <span className="text-[9px] text-zinc-600 block mt-2 tracking-widest uppercase">{t('startingFrom')}</span>
                </div>

                <ul className="space-y-4 flex-1 mb-8">
                   {(t.raw(`${pkg.id}.features`) as string[]).map((feature: string) => (
                     <li key={feature} className="flex items-start space-x-3 text-[13px] text-zinc-400 font-light leading-relaxed">
                        <Check size={14} className="text-gold mt-1 shrink-0" />
                        <span>{feature}</span>
                     </li>
                   ))}
                </ul>

                {/* Visual Proof Mini-Gallery */}
                <div className="flex gap-1.5 mb-8 h-16">
                   {pkg.proofGallery?.map((img: any, i: number) => (
                     <div key={i} className="flex-1 grayscale hover:grayscale-0 transition-all duration-500 relative">
                       <CloudinaryImage 
                         src={img.url}
                         alt="Quality Sample"
                         fill
                         className="object-cover"
                       />
                     </div>
                   ))}
                </div>

                <Link href="/contact" className={`text-center py-4 text-[9px] tracking-[0.3em] uppercase transition-all duration-500 ${
                  pkg.featured ? "bg-gold text-black border border-gold hover:bg-transparent hover:text-white" : "border border-white/20 hover:border-gold"
                }`}>
                   {t('reserveDate')}
                </Link>
             </RevealOnScroll>
           ))}
        </div>

        {/* Custom Quote Section */}
        <section className="mt-40 text-center">
           <RevealOnScroll>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase mb-6">{t('bespokeTitle')}</h4>
              <p className="text-2xl md:text-4xl font-serif mb-12">{t('bespokeDescription')}</p>
              <Link href="/contact" className="text-gold border-b border-gold/30 pb-2 hover:text-white hover:border-white transition-all text-sm tracking-widest uppercase">
                 {t('customQuote')}
              </Link>
           </RevealOnScroll>
        </section>
      </div>
    </div>
  );
}
