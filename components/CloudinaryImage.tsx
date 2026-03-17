"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { cn } from "@/lib/utils"; // Assuming a cn utility exists based on package.json (clsx, tailwind-merge)

interface CloudinaryImageProps extends Omit<ImageProps, "src" | "quality"> {
  src: string;
  quality?: number | "auto";
  format?: string;
  aspectRatio?: "portrait" | "landscape" | "square" | "video";
}

export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  width,
  height,
  quality = 90,
  format = "auto",
  className,
  alt = "Cinematic Photography",
  aspectRatio,
  fill,
  ...props
}) => {
  // Generate optimized URL
  const optimizedSrc = getCloudinaryUrl(src, { 
    width: typeof width === 'number' ? width : undefined, 
    quality, 
    format: format === "auto" ? "webp" : format, // default to highly compressed WebP
  });

  const aspectRatioClasses = {
    portrait: "aspect-[4/5]",
    landscape: "aspect-[3/2]",
    square: "aspect-square",
    video: "aspect-video",
  };

  return (
    <div className={cn(
      "relative overflow-hidden bg-zinc-900/50",
      aspectRatio && aspectRatioClasses[aspectRatio],
      className
    )}>
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        quality={typeof quality === 'number' ? quality : 90}
        className={cn(
          "object-cover transition-all duration-700 hover:scale-105",
          fill ? "absolute inset-0" : ""
        )}
        {...props}
      />
    </div>
  );
};
