import React from "react";
import { RevealOnScroll } from "@/components/AnimationWrappers";

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white py-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-6xl font-serif mb-12">Privacy Policy</h1>
          <div className="space-y-8 text-zinc-400 font-light leading-relaxed">
            <p>
              Your privacy is important to us. This Privacy Policy explains how Said Aqqa Photography collects, 
              uses, and protects your personal information when you use our website or services.
            </p>
            <h2 className="text-2xl font-serif text-gold mt-12">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our contact form, 
              such as your name, email address, and event details.
            </p>
            <h2 className="text-2xl font-serif text-gold mt-12">2. How We Use Your Information</h2>
            <p>
              We use the collected information solely to respond to your inquiries, 
              manage your bookings, and provide professional photography services.
            </p>
            <h2 className="text-2xl font-serif text-gold mt-12">3. Protection of Data</h2>
            <p>
              We implement appropriate security measures to safeguard your personal data 
              and do not share your information with third parties without your consent.
            </p>
            <p className="pt-12 text-sm italic">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
