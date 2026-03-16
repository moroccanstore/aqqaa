"use client";

import React from "react";
import { ParticleHero } from "@/components/ParticleHero";
import { RevealOnScroll } from "@/components/AnimationWrappers";

export default function TermsPage() {
  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title="Terms of Service"
        subtitle="Our Shared Commitment"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2af1b073-ef79-4c95-a197-f34cce06956a/SAI01743-2.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32 max-w-4xl">
        <RevealOnScroll className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">1. Agreement to Terms</h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            By accessing our website, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">2. Use License</h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            Permission is granted to temporarily view the materials (information or images) on Said Aqqa Photography's website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">3. Disclaimer</h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            The materials on our website are provided on an 'as is' basis. Said Aqqa Photography makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">4. Governing Law</h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            These terms and conditions are governed by and construed in accordance with the laws of Finland and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
}
