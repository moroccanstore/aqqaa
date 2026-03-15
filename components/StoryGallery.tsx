"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
            <motion.div 
              className={`relative flex-1 aspect-[3/4] md:aspect-auto w-full md:h-[80vh] overflow-hidden ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <CloudinaryImage
                src={img.url}
                alt={img.alt || "Wedding story photo"}
                width={img.width}
                height={img.height}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Content Sidebar / Quote */}
            <div 
               className={`flex-1 flex flex-col justify-center space-y-6 max-w-md ${
                 index % 2 === 0 ? "md:order-2 text-right md:items-end" : "md:order-1 text-left md:items-start"
               }`}
             >
                <motion.div 
                  className="story-text"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
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
                </motion.div>
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
