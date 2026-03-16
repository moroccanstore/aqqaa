"use client";

import React from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export const StickyBookingButton: React.FC = () => {
  const t = useTranslations("Navigation");

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
      <Link
        href="/contact"
        className="group relative flex items-center justify-center bg-zinc-900 border border-gold/30 text-white px-8 py-4 rounded-full shadow-2xl overflow-hidden hover:border-gold transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gold/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        <span className="text-[10px] tracking-[0.2em] font-light uppercase relative z-10 w-full text-center">
          Book a Session
        </span>
      </Link>
    </div>
  );
};
