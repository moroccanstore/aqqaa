import React from "react";
import Image from "next/image";
import { RevealOnScroll, ParallaxSection } from "@/components/AnimationWrappers";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { strapiData } from "@/lib/strapi";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import { ArrowRight, Award, Camera, Globe, Heart } from "lucide-react";

import { ParticleHero } from "@/components/ParticleHero";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'About.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'About' });
  const strapiAboutRes = await strapiData.getAbout().catch(() => ({ data: null }));
  const cmsAbout = strapiAboutRes?.data || {};

  const awards = [
    { icon: Award, label: t('awards.international'), year: "2023" },
    { icon: Globe, label: t('awards.destination'), year: "2022" },
    { icon: Heart, label: t('awards.couples'), year: "2021–2024" },
    { icon: Camera, label: t('awards.editorial'), year: "2020" },
  ];

  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title={cmsAbout.heroTitle || t('title')}
        subtitle={cmsAbout.heroSubtitle || t('subtitle')}
        backgroundImage={getCloudinaryUrl(cmsAbout.heroImage?.url || "/hero-cinematic.png", { width: 1920, quality: "auto" })}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        {/* Intro */}
        <section className="flex flex-col md:flex-row items-center gap-20 mb-40">
           <div className="flex-1">
              <RevealOnScroll>
                 <h1 className="text-gold text-[10px] tracking-[0.6em] uppercase mb-8">{cmsAbout.introTitle || t('intro.title')}</h1>
                 <h2 className="text-5xl md:text-8xl font-serif leading-tight mb-12">{cmsAbout.introHeading || t('intro.heading')}</h2>
                 <p className="text-zinc-400 font-light leading-relaxed text-xl max-w-xl mb-10">
                    {cmsAbout.introBio || t('intro.bio')}
                 </p>
                 <Link href="/contact" className="text-gold text-xs tracking-[0.3em] uppercase flex items-center hover:translate-x-2 transition-transform duration-500">
                    {t('cta.inquire')} <ArrowRight size={14} className="ml-3" />
                 </Link>
              </RevealOnScroll>
           </div>
           
           <div className="flex-1 w-full max-w-md mx-auto">
              <ParallaxSection speed={0.05}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                     <Image 
                       src={getCloudinaryUrl(cmsAbout.introImage?.url || "/said-profile.webp", { width: 800 })}
                       alt="Said Aqqa profile"
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 -z-10 hidden md:block" />
                 </div>
              </ParallaxSection>
           </div>
        </section>

        {/* Philosophy */}
        <section className="mb-40 border-t border-white/5 pt-40">
           <div className="max-w-4xl mx-auto text-center">
               <RevealOnScroll>
                 <h3 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8">{cmsAbout.philosophyTitle || t('philosophyTitle')}</h3>
                 <p className="text-3xl md:text-5xl font-serif italic leading-snug text-zinc-300">
                    &ldquo;{cmsAbout.philosophy || t('philosophy')}&rdquo;
                 </p>
              </RevealOnScroll>
           </div>
        </section>

        {/* Experience / Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-20 bg-zinc-950 border border-white/5 px-10 mb-40">
           {(cmsAbout.stats || []).map((stat: any, index: number) => (
             <RevealOnScroll key={stat.id} delay={(index + 1) * 0.1}>
                <div className="text-5xl font-serif text-gold mb-4">{stat.value}</div>
                <div className="text-zinc-500 text-[10px] tracking-widest uppercase">{t(`stats.${stat.id}`)}</div>
             </RevealOnScroll>
           ))}
        </section>

        {/* Awards & Recognition */}
        <section className="mb-40">
          <RevealOnScroll className="text-center mb-16">
            <h3 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">{t('awards.title')}</h3>
            <h4 className="text-4xl font-serif">{t('awards.heading')}</h4>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map(({ icon: Icon, label, year }, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="border border-white/5 bg-zinc-950 p-8 hover:border-gold/30 transition-colors duration-500 group">
                  <Icon size={24} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-light text-sm leading-relaxed mb-4">{label}</p>
                  <span className="text-zinc-600 text-[10px] tracking-widest uppercase">{year}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Process Gallery */}
        <section className="mb-0">
           <RevealOnScroll className="text-center mb-20">
              <h3 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">{t('btsTitle')}</h3>
              <h4 className="text-4xl font-serif">{t('btsHeading')}</h4>
           </RevealOnScroll>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {(cmsAbout.processGallery || []).map((img: any, index: number) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                   <div className="relative aspect-[3/4] group overflow-hidden">
                      <CloudinaryImage 
                        src={img.url}
                        alt={t(`process.${['scouting', 'setup', 'directing', 'processing'][index % 4]}`)}
                        fill
                        className="w-full h-full transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6 pointer-events-none">
                         <span className="text-white text-[10px] tracking-widest uppercase border-b border-gold/50 pb-1">
                           {t(`process.${['scouting', 'setup', 'directing', 'processing'][index]}`)}
                         </span>
                      </div>
                   </div>
                </RevealOnScroll>
              ))}
           </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-40 bg-zinc-950 border-y border-white/5 text-center px-6 mt-40">
        <RevealOnScroll>
          <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8">{t('cta.label')}</h2>
          <h3 className="text-4xl md:text-6xl font-serif mb-12">{t('cta.heading')}</h3>
          <p className="text-zinc-500 font-light mb-16 max-w-xl mx-auto">{t('cta.description')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="btn-liquid bg-white text-black px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-gold transition-colors">
              {t('cta.inquire')}
            </Link>
            <Link href="/portfolio" className="border border-white/20 text-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-colors">
              {t('cta.portfolio')}
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
