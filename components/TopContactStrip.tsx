"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export const TopContactStrip = () => {
  const t = useTranslations("HomePage.hero.contactStrip");

  return (
    <div className="w-full bg-zinc-950/80 backdrop-blur-sm border-b border-white/5 py-2 z-[60] relative">
      <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-4 text-white/60">
        <div className="flex items-center gap-6">
          <a href={`tel:${t("phone")}`} className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300">
            <Phone className="w-3 h-3 text-gold/50" />
            <span>{t("phone")}</span>
          </a>
          <a href="https://wa.me/358407444838" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300">
            <MessageCircle className="w-3 h-3 text-gold/50" />
            <span>{t("whatsapp")}</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase">
          <MapPin className="w-3 h-3 text-gold/50" />
          <span>{t("location")}</span>
        </div>
      </div>
    </div>
  );
};
