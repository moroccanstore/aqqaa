"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { Play, X } from "lucide-react";
import { ParticleHero } from "@/components/ParticleHero";
import { useTranslations } from "next-intl";

type Category = "all" | "wedding" | "commercial" | "project";

export default function VideosClient({ videos }: { videos: any[] }) {
  const t = useTranslations("Videos");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t("filter.all") },
    { key: "wedding", label: t("filter.wedding") },
    { key: "commercial", label: t("filter.commercial") },
    { key: "project", label: t("filter.project") },
  ];

  const filtered = activeCategory === "all"
    ? videos
    : videos.filter((v: any) => v.category === activeCategory);

  const openLightbox = (youtubeId: string) => {
    setLightboxVideo(youtubeId);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxVideo(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="bg-black pb-32 min-h-screen">
      <ParticleHero 
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a655a99-5212-4446-b5aa-0f20090d7c49/SAI03757.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-serif">{t("heading")}</h1>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto mt-8" />
          <p className="text-zinc-500 font-light mt-8 max-w-xl mx-auto">{t("subheading")}</p>
        </RevealOnScroll>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-3 text-[9px] tracking-[0.4em] uppercase transition-all duration-300 ${
                activeCategory === key
                  ? "bg-gold text-black"
                  : "border border-white/10 text-zinc-400 hover:border-gold/40 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filtered.map((project, index) => (
            <RevealOnScroll key={project.id || project.youtubeId} delay={index * 0.1}>
              <button
                onClick={() => openLightbox(project.youtubeId)}
                className="group block w-full text-left"
                aria-label={`Play ${project.title}`}
              >
                <div className="relative aspect-video overflow-hidden mb-6 bg-zinc-900 border border-white/5">
                  <Image
                    src={project.thumbnail || `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm bg-black/20 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-500 group-hover:scale-110">
                      <Play fill="white" size={24} className="ml-1" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-gold text-[9px] tracking-[0.3em] uppercase bg-black/60 backdrop-blur-sm px-3 py-1.5">
                      {project.category === "wedding" ? t("filter.wedding") : t("filter.commercial")}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif group-hover:text-gold transition-colors">{project.title}</h3>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-12"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Close video"
          >
            <X size={32} />
          </button>
          <div
            className="w-full max-w-5xl aspect-video relative"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${lightboxVideo}?autoplay=1&rel=0`}
              title="Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
