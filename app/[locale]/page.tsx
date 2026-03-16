import React from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ParticleHero } from "@/components/ParticleHero";
import { RevealOnScroll, ParallaxSection } from "@/components/AnimationWrappers";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { TrustFactors } from "@/components/TrustFactors";
import { BookingInquiry } from "@/components/BookingInquiry";
import MiniInquiryForm from "@/components/MiniInquiryForm";
import { curatedPortfolioItems } from "@/lib/data/portfolio_data";
import { weddings } from "@/lib/data/weddings";
import { testimonials } from "@/lib/data/testimonials";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="bg-black text-white">
      {/* 1. Hero Section */}
      <ParticleHero 
        backgroundImage="/hero-uploaded.webp"
        description={t("hero.description")}
        primaryCTA={{ label: t("hero.primaryCTA"), href: "/contact" }}
        secondaryCTA={{ label: t("hero.secondaryCTA"), href: "#portfolio" }}
      />

      {/* 2. Portfolio Gallery Section */}
      <PortfolioGallery />
      
      {/* 3. Trust Factors Section (Partners) */}
      <TrustFactors />

      {/* 4. About Teaser Section */}
      <section className="py-48 bg-black overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
           <div className="flex-1">
              <ParallaxSection speed={0.1}>
                 <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                    <Image 
                      src={getCloudinaryUrl(weddings.find(w => w.featured)?.images[0].url || weddings[0].images[0].url, { width: 800 })}
                      alt="Said Aqqa - Luxury Wedding Photographer"
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

      {/* 5. Testimonials Section */}
      <section className="py-48 bg-zinc-950 border-y border-white/5">
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

      {/* 6. Booking Inquiry Section (CRO Component) */}
      <BookingInquiry />

      {/* 7. Mini Inquiry Form (High-intent Lead Capture) */}
      <MiniInquiryForm />
    </div>
  );
}
