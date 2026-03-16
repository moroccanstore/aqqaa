"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { RevealOnScroll } from "./AnimationWrappers";
import { ArrowRight } from "lucide-react";

export const PricingTeaser = () => {
  const t = useTranslations("HomePage.pricingTeaser");

  return (
    <section className="py-32 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8">{t("title")}</h2>
            <div className="space-y-6 mb-16">
              <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
                {t("startingFrom")} <span className="text-gold">€1,800</span>
              </h3>
              <p className="text-zinc-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                {t("inquire")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href="/pricing" 
                className="group flex items-center gap-3 text-white text-[10px] tracking-[0.3em] uppercase hover:text-gold transition-colors duration-500"
              >
                {t("viewAll")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-white text-black text-[10px] tracking-[0.3em] uppercase hover:bg-gold hover:text-white transition-all duration-700"
              >
                Request Consultation
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
