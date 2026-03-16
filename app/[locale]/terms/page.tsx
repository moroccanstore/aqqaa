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
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">1. Agreement to Terms</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                By accessing our website and engaging with Said Aqqa Photography, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">2. Intellectual Property & Usage</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                All images and content on this website are the unique artistic property of Said Aqqa. Permission is granted for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside text-zinc-400 font-light space-y-4">
                <li>You may not modify or copy the materials.</li>
                <li>You may not use the materials for any commercial purpose without explicit written consent.</li>
                <li>You may not attempt to decompile or reverse engineer any software contained on the website.</li>
                <li>You may not remove any copyright or other proprietary notations from the materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">3. Booking & Service Disclaimer</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Specific service agreements (contracts) signed during the booking process for weddings or portrait sessions supersede these general website terms. While we strive for absolute artistic excellence, all creative services are provided on an 'as is' basis regarding artistic interpretation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">4. Limitation of Liability</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                In no event shall Said Aqqa Photography or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on the website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">5. Governing Law</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of <strong className="text-white">Finland</strong> and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
