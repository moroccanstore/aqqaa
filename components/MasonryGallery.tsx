"use client";

import React from "react";
import Image from "next/image";
import { CloudinaryImage } from "./CloudinaryImage";
import { RevealOnScroll } from "./AnimationWrappers";

export interface GalleryItem {
  url: string;
  width: number;
  height: number;
  alt: string;
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
           <div className="relative group overflow-hidden bg-zinc-900">
             <CloudinaryImage
               src={img.url}
               alt={img.alt || "Gallery Image"}
               width={800}
               height={1200}
               className="w-full h-auto"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="btn-liquid border border-white/20 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <span className="text-white text-[10px] tracking-[0.3em] font-light uppercase">View Detail</span>
                </div>
             </div>
           </div>
        </RevealOnScroll>
      ))}
    </div>
  );
};
