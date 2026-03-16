"use client";

import React from "react";
import { RevealOnScroll } from "./AnimationWrappers";
import { useTranslations } from "next-intl";

export const TrustStrip = () => {
  const t = useTranslations("HomePage.hero.trust");

  const factors = [
    { key: "experience", label: t("experience") },
    { key: "services", label: t("services") },
    { key: "location", label: t("location") },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-16 border-t border-white/10 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {factors.map((factor, index) => (
          <RevealOnScroll key={factor.key} delay={index * 0.1} className="flex flex-col items-center md:items-start text-center md:text-left group">
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-2 group-hover:tracking-[0.5em] transition-all duration-300">
              {factor.label.split(' ')[0]}
            </span>
            <p className="text-white/60 text-[11px] md:text-sm font-light tracking-widest uppercase">
              {factor.label.split(' ').slice(1).join(' ')}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};
