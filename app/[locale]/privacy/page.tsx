"use client";

import React from "react";
import { ParticleHero } from "@/components/ParticleHero";
import { RevealOnScroll } from "@/components/AnimationWrappers";

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title="Privacy Policy"
        subtitle="Protecting Your Story"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2af1b073-ef79-4c95-a197-f34cce06956a/SAI01743-2.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32 max-w-4xl">
        <RevealOnScroll className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">Introduction</h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            At Said Aqqa Photography, we value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">Data Collection</h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
          </p>

          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">How We Use Your Data</h2>
          <ul className="list-disc list-inside text-zinc-400 font-light space-y-4 mb-8">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer care and support</li>
            <li>To monitor the usage of our Service</li>
          </ul>

          <h2 className="text-3xl font-serif text-gold mb-12 uppercase tracking-widest">Contact Us</h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            If you have any questions about this Privacy Policy, please contact us at saidaqqa@gmail.com.
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
}
