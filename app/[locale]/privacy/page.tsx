import React from "react";
import { ParticleHero } from "@/components/ParticleHero";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { strapiData } from "@/lib/strapi";
import ReactMarkdown from "react-markdown";

export default async function PrivacyPage() {
  const strapiRes = await strapiData.getPrivacy().catch(() => ({ data: null }));
  const privacy = strapiRes?.data || { title: "Privacy Policy", subtitle: "Protecting Your Story", content: "Content coming soon..." };
  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title={privacy.title}
        subtitle={privacy.subtitle}
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2af1b073-ef79-4c95-a197-f34cce06956a/SAI01743-2.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32 max-w-4xl">
        <RevealOnScroll className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-gold prose-headings:uppercase prose-headings:tracking-widest prose-p:text-zinc-400 prose-p:font-light prose-p:leading-relaxed prose-li:text-zinc-400 prose-li:font-light">
          <ReactMarkdown>{privacy.content}</ReactMarkdown>
        </RevealOnScroll>
      </div>
    </div>
  );
}
