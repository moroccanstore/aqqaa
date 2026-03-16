"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface PhotoViewerProps {
  isOpen: boolean;
  onClose: () => void;
  photos: { url: string; width: number; height: number; alt: string }[];
  initialIndex?: number;
}

/**
 * PhotoViewer: A premium fullscreen lightbox experience.
 */
export const PhotoViewer: React.FC<PhotoViewerProps> = ({
  isOpen,
  onClose,
  photos,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  if (!isOpen) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white z-10 transition-colors"
        aria-label="Close"
      >
        <X size={32} strokeWidth={1} />
      </button>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Counter */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest font-light">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Image Display */}
      <div className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-100">
        <Image
          src={getCloudinaryUrl(currentPhoto.url, { width: 1920, quality: "auto" })}
          alt={currentPhoto.alt || "Portfolio photography"}
          width={currentPhoto.width}
          height={currentPhoto.height}
          className="object-contain max-h-full"
          priority
        />
      </div>
    </div>
  );
};
