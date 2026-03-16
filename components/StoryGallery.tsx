"use client";

import React from "react";
import { CloudinaryImage } from "./CloudinaryImage";

interface StoryImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface StoryGalleryProps {
  images: StoryImage[];
}

/**
 * StoryGallery: A cinematic, timeline-based gallery for wedding stories.
 */
export const StoryGallery: React.FC<StoryGalleryProps> = ({ images }) => {

  return (
    <div className="bg-black">
      {images.map((img, index) => (
        <section
          key={`${img.url}-${index}`}
          className="min-h-[70vh] md:min-h-screen flex items-center justify-center p-4 md:p-20 relative overflow-hidden"
        >
          <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            {/* Image Container */}
            <div 
              className={`relative flex-1 aspect-[3/4] md:aspect-auto w-full md:h-[80vh] overflow-hidden transition-all duration-1000 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <CloudinaryImage
                src={img.url}
                alt={img.alt || "Wedding story photo"}
                width={img.width}
                height={img.height}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Sidebar / Quote */}
            <div 
               className={`flex-1 flex flex-col justify-center space-y-6 max-w-md ${
                 index % 2 === 0 ? "md:order-2 text-right md:items-end" : "md:order-1 text-left md:items-start"
               }`}
             >
                <div className="story-text transition-all duration-1000">
                   <span className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4 block">
                     CHAPTER {index + 1}
                   </span>
                   <h2 className="text-white text-3xl md:text-5xl font-serif mb-6 leading-tight">
                     {img.alt || "A Moment Captured"}
                   </h2>
                   <div className="w-12 h-[1px] bg-gold/50 mb-6 font-gold"></div>
                   <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                      Through the artistic lens, we capture the raw emotions and delicate details that tell your unique love story. 
                      Every frame is a testament to the timeless heritage of your most cherished day.
                   </p>
                </div>
             </div>
          </div>
          
          {/* Subtle Parallax Background Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] text-[30vw] font-serif pointer-events-none select-none z-0">
             {index + 1}
          </div>
        </section>
      ))}
    </div>
  );
};
