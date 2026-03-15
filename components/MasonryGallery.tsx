"use client";

import React from "react";
import Link from "next/link";
import { CloudinaryImage } from "./CloudinaryImage";
import { RevealOnScroll } from "./AnimationWrappers";

const GalleryItemInner = ({ img, priority }: { img: GalleryItem, priority?: boolean }) => (
  <>
    <CloudinaryImage
      src={img.url}
      alt={img.alt || "Gallery Image"}
      width={600}
      height={900}
      quality={80}
      priority={priority}
      className="w-full h-auto"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      <div className="btn-liquid border border-white/20 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-white text-[10px] tracking-[0.3em] font-light uppercase">View Detail</span>
      </div>
    </div>
  </>
);

export interface GalleryItem {
  url: string;
  width: number;
  height: number;
  alt: string;
  href?: string;
}

interface MasonryGalleryProps {
  images: GalleryItem[];
}

/**
 * MasonryGallery: High-performance portfolio gallery.
 */
export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
      {images.map((img, index) => (
        <RevealOnScroll key={`${img.url}-${index}`} delay={index * 0.05} className="break-inside-avoid">
          {img.href ? (
            <Link href={img.href} className="block group relative overflow-hidden bg-zinc-900">
              <GalleryItemInner img={img} priority={index < 2} />
            </Link>
          ) : (
            <div className="relative group overflow-hidden bg-zinc-900">
              <GalleryItemInner img={img} priority={index < 2} />
            </div>
          )}
        </RevealOnScroll>
      ))}
    </div>
  );
};
