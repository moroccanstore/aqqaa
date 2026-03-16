"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { RevealOnScroll } from "./AnimationWrappers";
import { Mail, Calendar, Map, Camera, Image as ImageIcon } from "lucide-react";

export const BookingProcess = () => {
  const t = useTranslations("HomePage.bookingProcess");

  const steps = [
    { icon: <Mail className="w-6 h-6" />, ...t.raw("step1") },
    { icon: <Calendar className="w-6 h-6" />, ...t.raw("step2") },
    { icon: <Map className="w-6 h-6" />, ...t.raw("step3") },
    { icon: <Camera className="w-6 h-6" />, ...t.raw("step4") },
    { icon: <ImageIcon className="w-6 h-6" />, ...t.raw("step5") },
  ];

  return (
    <section className="py-32 bg-zinc-950 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <RevealOnScroll className="mb-20">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4 block">{t("subtitle")}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">{t("title")}</h2>
        </RevealOnScroll>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-gold mb-8 transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    {step.icon}
                  </div>
                  <h3 className="text-white text-xs tracking-[0.3em] uppercase mb-4 font-medium transition-colors group-hover:text-gold">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
