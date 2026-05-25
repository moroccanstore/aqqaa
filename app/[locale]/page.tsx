import React, { Suspense } from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

// Above-the-fold: eagerly loaded
import { ParticleHero } from "@/components/ParticleHero";
import { RevealOnScroll, ParallaxSection } from "@/components/AnimationWrappers";
import { WeddingServicesStrip } from "@/components/WeddingServicesStrip";

// Below-the-fold: lazy loaded for bundle performance
const PortfolioGallery = dynamic(() => import("@/components/PortfolioGallery").then(m => ({ default: m.PortfolioGallery })), { ssr: false });
const PricingTeaser = dynamic(() => import("@/components/PricingTeaser").then(m => ({ default: m.PricingTeaser })), { ssr: false });
const TrustFactors = dynamic(() => import("@/components/TrustFactors").then(m => ({ default: m.TrustFactors })), { ssr: false });
const BookingInquiry = dynamic(() => import("@/components/BookingInquiry").then(m => ({ default: m.BookingInquiry })), { ssr: false });
const BookingProcess = dynamic(() => import("@/components/BookingProcess").then(m => ({ default: m.BookingProcess })), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })), { ssr: false });
const StickyMobileCTA = dynamic(() => import("@/components/StickyMobileCTA").then(m => ({ default: m.StickyMobileCTA })), { ssr: false });
const MiniInquiryForm = dynamic(() => import("@/components/MiniInquiryForm"), { ssr: false });

import { strapiData } from "@/lib/strapi";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { ArrowRight } from "lucide-react";
import { testimonials as localTestimonials } from "@/lib/data/testimonials";
import { weddings as localWeddings } from "@/lib/data/weddings";


export default async function HomePage() {
  const t = await getTranslations("HomePage");
  
  const [strapiTestimonialsRes, strapiWeddingsRes, strapiHomepageRes, strapiPortfolioRes, strapiFaqRes] = await Promise.all([
    strapiData.getTestimonials().catch(() => ({ data: [] })),
    strapiData.getWeddings().catch(() => ({ data: [] })),
    strapiData.getHomepage().catch(() => ({ data: null })),
    strapiData.getPortfolio().catch(() => ({ data: [] })),
    strapiData.getFaq().catch(() => ({ data: null }))
  ]);

  const activeTestimonials = strapiTestimonialsRes?.data?.length > 0 ? strapiTestimonialsRes.data : localTestimonials;
  const activeWeddings = strapiWeddingsRes?.data?.length > 0 ? strapiWeddingsRes.data : localWeddings;
  const homepageCMS = strapiHomepageRes?.data || {};
  const activePortfolio = strapiPortfolioRes?.data?.length > 0 ? strapiPortfolioRes.data : [];
  const faqCMS = strapiFaqRes?.data || {};

  return (
    <div className="bg-black text-white">
      {/* 1. The Dream: Hero Section */}
      <ParticleHero 
        backgroundImage={getCloudinaryUrl(homepageCMS?.heroImage?.url || "/hero-uploaded.webp")}
        description={homepageCMS?.heroDescription || t("hero.description")}
        primaryCTA={{ label: t("hero.primaryCTA"), href: "/contact" }}
        secondaryCTA={{ label: t("hero.secondaryCTA"), href: "#portfolio" }}
      />

      {/* 2. The Credibility: Trust Factors (Moved up for immediate premium positioning) */}
      <div className="bg-black py-16 border-b border-white/5">
        <TrustFactors />
      </div>

      {/* 3. The Art: Portfolio Gallery Section */}
      <PortfolioGallery isHomepage={true} items={activePortfolio} />

      {/* 4. The Artist: About Teaser Section (Connect the art to the creator) */}
      <section className="py-32 bg-black overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
           <div className="flex-1">
              <ParallaxSection speed={0.1}>
                  <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                    <Image 
                      src={getCloudinaryUrl(activeWeddings.find((w: any) => w.featured)?.images?.[0]?.url || activeWeddings[0]?.images?.[0]?.url || "", { width: 800 })}
                      alt="Said Aqqa - Luxury Wedding Photographer"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute -bottom-10 -right-10 w-full h-full border border-gold/20 -z-10 hidden md:block" />
                 </div>
              </ParallaxSection>
           </div>
           <div className="flex-1 space-y-8">
              <RevealOnScroll>
                 <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase">{t("theArtist")}</h2>
                 <h3 className="text-4xl md:text-6xl font-serif leading-tight text-white">Said Aqqa</h3>
                 <p className="text-zinc-300 font-light leading-relaxed text-lg max-w-lg">
                    {t("artistDescription")}
                 </p>
                 <Link href="/about" className="text-gold text-xs tracking-[0.3em] uppercase flex items-center hover:translate-x-2 transition-transform duration-500 mt-6">
                    {t("myPhilosophy")} <ArrowRight size={14} className="ml-3" />
                 </Link>
              </RevealOnScroll>
           </div>
        </div>
      </section>

      {/* 5. The Proof: Testimonials Section */}
      <section className="py-32 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-6">
           <RevealOnScroll className="text-center mb-20">
              <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">{t("kindWords")}</h2>
              <h3 className="text-4xl font-serif text-white">{t("clientFeedback")}</h3>
           </RevealOnScroll>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeTestimonials.slice(0, 3).map((testimonial: any, index: number) => (
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

      {/* 6. The Services: Wedding Services Strip */}
      <WeddingServicesStrip />

      {/* 7. The Journey: Booking Process */}
      <BookingProcess />

      {/* 8. The Investment: Pricing Teaser Section */}
      <PricingTeaser />

      {/* 9. Reassurance: FAQ Section */}
      <FAQ title={faqCMS.title} description={faqCMS.description} />

      {/* 10. The Action: Booking Inquiry & Form */}
      <BookingInquiry />
      <MiniInquiryForm />

      {/* Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
