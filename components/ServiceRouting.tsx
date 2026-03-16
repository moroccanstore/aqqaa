"use client";

import React from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { RevealOnScroll } from "./AnimationWrappers";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const ServiceRouting: React.FC = () => {
  const t = useTranslations("HomePage.services");

  const services = [
    {
      id: "wedding",
      title: t("wedding.title"),
      cta: t("wedding.cta"),
      href: "/weddings",
      image: "v1710434444/portfolio/weddings/hero_wedding.jpg", // Placeholder - should be replaced with real high-perf URLs
    },
    {
      id: "portrait",
      title: t("portrait.title"),
      cta: t("portrait.cta"),
      href: "/portfolio/portraits",
      image: "v1710434444/portfolio/portraits/hero_portrait.jpg",
    },
    {
      id: "cinema",
      title: t("cinema.title"),
      cta: t("cinema.cta"),
      href: "/videos",
      image: "v1710434444/portfolio/video_hero.jpg",
    },
    {
      id: "commercial",
      title: t("commercial.title"),
      cta: t("commercial.cta"),
      href: "/portfolio/products",
      image: "v1710434444/portfolio/commercial_hero.jpg",
    },
  ];

  return (
    <section className="py-32 bg-zinc-950 border-b border-white/5">
      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-20">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase block mb-4">
            {t("subtitle")}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            {t("title")}
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 0.1}>
              <Link href={service.href as any} className="group relative block aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src={getCloudinaryUrl(service.image, { width: 800, quality: "auto" })}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-xl text-white font-serif mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-gold text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {service.cta} <ArrowRight size={12} className="ml-2" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
