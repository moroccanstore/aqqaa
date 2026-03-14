import React from "react";
import { RevealOnScroll } from "@/components/AnimationWrappers";

export default function TermsPage() {
  return (
    <div className="bg-black text-white py-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-6xl font-serif mb-12">Terms of Service</h1>
          <div className="space-y-8 text-zinc-400 font-light leading-relaxed">
            <p>
              By accessing or using the Said Aqqa Photography website, you agree to be bound by 
              these Terms of Service and all applicable laws and regulations.
            </p>
            <h2 className="text-2xl font-serif text-gold mt-12">1. Service Agreement</h2>
            <p>
              All photography services are subject to a separate signed contract between the 
              photographer and the client detailing specific session requirements and image delivery.
            </p>
            <h2 className="text-2xl font-serif text-gold mt-12">2. Intellectual Property</h2>
            <p>
              All images and content on this website are the intellectual property of Said Aqqa 
              Photography and are protected by copyright laws.
            </p>
            <h2 className="text-2xl font-serif text-gold mt-12">3. Use License</h2>
            <p>
              Permission is granted to view the materials on this website for personal, 
              non-commercial transitory viewing only.
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
