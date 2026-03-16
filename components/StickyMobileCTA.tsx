"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";

export const StickyMobileCTA = () => {
  const t = useTranslations("HomePage.stickyCTA");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls 500px down
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-0 left-0 w-full z-50 p-4 transition-all duration-700 transform md:hidden",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
    )}>
      <div className="flex gap-3 h-14 w-full">
        <a 
          href="https://wa.me/358407444838" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-zinc-900 border border-white/10 text-white rounded-full flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium backdrop-blur-md shadow-2xl"
        >
          <MessageCircle size={16} className="text-gold" />
          {t("whatsapp")}
        </a>
        <Link 
          href="/contact"
          className="flex-[1.5] bg-white text-black rounded-full flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold shadow-2xl shadow-gold/20"
        >
          <Calendar size={16} />
          {t("availability")}
        </Link>
      </div>
    </div>
  );
};
