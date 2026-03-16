"use client";

import React from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { RevealOnScroll } from "./AnimationWrappers";
import { ArrowRight } from "lucide-react";

export const BookingInquiry: React.FC = () => {
  const t = useTranslations("HomePage.inquiry");

  return (
    <section className="py-48 bg-black relative overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll>
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase block mb-6">
            {t("subtitle")}
          </span>
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[1.1]">
            {t("title")}
          </h2>
          <p className="text-zinc-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            {t("description")}
          </p>
          
          <Link 
            href="/contact" 
            className="btn-liquid inline-flex items-center px-12 py-6 bg-white text-black text-[11px] tracking-[0.4em] uppercase font-bold hover:text-white transition-all duration-500 transform hover:scale-105"
          >
            {t("cta")} <ArrowRight size={16} className="ml-4" />
          </Link>
        </RevealOnScroll>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-gold/50 to-transparent" />
    </section>
  );
};
