import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "./AnimationWrappers";

export interface JournalPost {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  publishDate: string;
  readTime?: number;
  author?: string;
  coverImage?: {
    url: string;
    width?: number;
    height?: number;
  };
}

interface JournalCardProps {
  post: JournalPost;
  delay?: number;
  readMoreLabel?: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  stories: "Wedding Stories",
  tips: "Tips & Advice",
  destinations: "Destinations",
  "behind-scenes": "Behind the Scenes",
  announcements: "Announcements",
};

export function JournalCard({ post, delay = 0, readMoreLabel = "Read More" }: JournalCardProps) {
  const strapiBase = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const imageSrc = post.coverImage?.url
    ? post.coverImage.url.startsWith("http")
      ? post.coverImage.url
      : `${strapiBase}${post.coverImage.url}`
    : null;

  const formattedDate = post.publishDate
    ? new Date(post.publishDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <RevealOnScroll delay={delay}>
      <Link href={`/journal/${post.slug}`} className="group block">
        {/* Cover image */}
        <div className="relative aspect-[3/2] overflow-hidden mb-6 bg-zinc-900">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <span className="text-zinc-700 text-[10px] tracking-widest uppercase">Said Aqqa</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

          {/* Category badge */}
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="bg-gold text-black text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-medium">
                {CATEGORY_LABELS[post.category] || post.category}
              </span>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-4 text-zinc-600 text-[10px] tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <Calendar size={10} />
            {formattedDate}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock size={10} />
              {post.readTime} min
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:text-gold transition-colors duration-300 leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Read more */}
        <span className="text-gold text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
          {readMoreLabel} <ArrowRight size={12} />
        </span>
      </Link>
    </RevealOnScroll>
  );
}
