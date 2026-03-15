import React from "react";
import { notFound } from "next/navigation";
import { weddings, Wedding } from "@/lib/data/weddings";
import { StoryGallery } from "@/components/StoryGallery";
import { RevealOnScroll } from "@/components/AnimationWrappers";

interface WeddingPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return weddings.map((wedding: Wedding) => ({
    slug: wedding.slug,
  }));
}

export async function generateMetadata({ params }: WeddingPageProps) {
  const wedding = weddings.find((w: Wedding) => w.slug === params.slug);
  if (!wedding) return {};

  return {
    title: `${wedding.title} | Said Aqqa Photography`,
    description: `Experience the beautiful wedding story of ${wedding.title}, captured in stunning detail by Said Aqqa.`,
  };
}

export default function WeddingDetailPage({ params }: WeddingPageProps) {
  const wedding = weddings.find((w: Wedding) => w.slug === params.slug);

  if (!wedding) {
    notFound();
  }

  return (
    <div className="bg-black">
      {/* Wedding Header */}
      <section className="h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-20">
         <RevealOnScroll>
            <h1 className="text-white text-5xl md:text-8xl font-serif mb-6">{wedding.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-gold text-[10px] tracking-[0.4em] uppercase">
               <span>Gallery</span>
               <span className="w-8 h-[1px] bg-gold/50"></span>
               <span>{wedding.images.length} Moments</span>
            </div>
         </RevealOnScroll>
      </section>

      {/* Cinematic Story Gallery */}
      <StoryGallery images={wedding.images} />

      {/* Footer CTA specifically for Weddings */}
      <section className="py-40 bg-zinc-950 text-center px-6">
         <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Capture Your Love</h2>
            <p className="text-zinc-500 font-light mb-12 max-w-xl mx-auto">
               Every wedding is a unique masterpiece. Let's discuss how we can tell your story through our lens.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <a href="/contact" className="bg-white text-black px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-gold transition-colors">
                  Inquire Now
               </a>
               <a href="/weddings" className="border border-white/20 text-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-colors">
                  Back to All Stories
               </a>
            </div>
         </RevealOnScroll>
      </section>
    </div>
  );
}
