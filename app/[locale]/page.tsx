import React from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ParticleHero } from "@/components/ParticleHero";
import { RevealOnScroll, ParallaxSection } from "@/components/AnimationWrappers";
import { MasonryGallery } from "@/components/MasonryGallery";
import { weddings } from "@/lib/data/weddings";
import { testimonials } from "@/lib/data/testimonials";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { ArrowRight } from "lucide-react";
import { TrustFactors } from "@/components/TrustFactors";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <ParticleHero 
        backgroundImage={getCloudinaryUrl("https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/10aa1f1b-94f0-4c0a-a001-46671cbdc6ca/Couple%2band%2bhorses.jpg", { width: 1920, quality: "auto" })}
      />

      {/* Gallery Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll className="text-center mb-20">
            <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">{t("portfolioOptions")}</h2>
            <h3 className="text-5xl md:text-7xl font-serif">{t("selectedWorks")}</h3>
          </RevealOnScroll>
          
          <MasonryGallery 
            images={weddings.flatMap(w => w.images.slice(0, 2).map(img => ({
               url: img.url,
               width: 800,
               height: 1200,
               alt: img.alt || "Cinematic Wedding Moment",
               href: `/weddings/${w.slug}`
            })))}
          />

          <div className="mt-20 text-center">
             <Link 
              href="/weddings" 
              className="btn-liquid inline-block border border-white/20 px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:border-gold transition-all duration-500"
            >
              {t("allWeddings")}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trust Factors Section */}
      <TrustFactors />

      {/* About Teaser */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
           <div className="flex-1">
              <ParallaxSection speed={0.1}>
                 <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                    <Image 
                      src={getCloudinaryUrl(weddings[5].images[0].url, { width: 800 })}
                      alt="Said Aqqa"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute -bottom-10 -right-10 w-full h-full border border-gold/20 -z-10 hidden md:block" />
                 </div>
              </ParallaxSection>
           </div>
           <div className="flex-1 space-y-8">
              <RevealOnScroll>
                 <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase">{t("theArtist")}</h2>
                 <h3 className="text-4xl md:text-6xl font-serif leading-tight">Said Aqqa</h3>
                 <p className="text-zinc-300 font-light leading-relaxed text-lg max-w-lg">
                    {t("artistDescription")}
                 </p>
                 <Link href="/about" className="text-gold text-xs tracking-[0.3em] uppercase flex items-center hover:translate-x-2 transition-transform duration-500">
                    {t("myPhilosophy")} <ArrowRight size={14} className="ml-3" />
                 </Link>
              </RevealOnScroll>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
           <RevealOnScroll className="text-center mb-20">
              <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">{t("kindWords")}</h2>
              <h3 className="text-4xl font-serif">{t("clientFeedback")}</h3>
           </RevealOnScroll>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <RevealOnScroll 
                  key={index} 
                  className="bg-white/[0.02] border border-white/[0.05] p-10 hover:border-gold/30 transition-colors"
                  delay={index * 0.1}
                >
                   <p className="text-zinc-300 font-light italic leading-relaxed mb-8 text-sm">
                      "{testimonial.text}"
                   </p>
                   <div>
                      <h4 className="text-white text-xs tracking-widest uppercase font-medium">{testimonial.name}</h4>
                      <p className="text-gold text-[10px] tracking-[0.2em] uppercase mt-1">{t("verifiedExperience")}</p>
                   </div>
                </RevealOnScroll>
              ))}
           </div>
        </div>
      </section>

      {/* Simple Marquee CTA */}
      <section className="py-20 bg-black overflow-hidden border-b border-white/5" aria-hidden="true">
         <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-6xl md:text-9xl font-serif text-white/[0.03] uppercase tracking-tighter mx-10" aria-hidden="true">
                {t("marquee")}
              </span>
            ))}
         </div>
      </section>
    </div>
  );
}
