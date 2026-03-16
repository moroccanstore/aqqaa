"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { RevealOnScroll } from "./AnimationWrappers";
import { Camera, Church, UserCheck } from "lucide-react";

export const WeddingServicesStrip = () => {
  const t = useTranslations("HomePage.servicesStrip");

  const services = [
    { icon: <Church className="w-5 h-5" />, label: t("ceremony") },
    { icon: <UserCheck className="w-5 h-5" />, label: t("portraits") },
    { icon: <Camera className="w-5 h-5" />, label: t("fullDay") },
  ];

  return (
    <section className="bg-zinc-950 border-y border-white/5 py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 group">
                <div className="text-gold/50 group-hover:text-gold transition-colors duration-500">
                  {service.icon}
                </div>
                <span className="text-white text-[11px] tracking-[0.4em] uppercase font-light">
                  {service.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
