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
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">1. Introduction</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                At Said Aqqa Photography, we value your privacy and are committed to protecting your personal data. This privacy policy informs you how we handle your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">2. The Data We Collect</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc list-inside text-zinc-400 font-light space-y-4">
                <li><strong className="text-white">Identity Data</strong> includes first name, last name, or similar identifier.</li>
                <li><strong className="text-white">Contact Data</strong> includes email address, telephone numbers, and billing address.</li>
                <li><strong className="text-white">Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting, and location.</li>
                <li><strong className="text-white">Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">3. Cookies & Tracking</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Our website uses cookies to distinguish you from other users. This helps us to provide you with a high-quality experience when you browse our portfolio and allows us to improve our site.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">4. Your Legal Rights (GDPR)</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data:
              </p>
              <ul className="list-disc list-inside text-zinc-400 font-light space-y-4">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-gold mb-8 uppercase tracking-widest">5. Contact Us</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-8 p-8 border border-white/5 bg-white/[0.02]">
                <p className="text-gold tracking-widest uppercase text-xs mb-2">Email</p>
                <p className="text-white font-light text-xl italic">saidaqqa@gmail.com</p>
              </div>
            </section>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
