import React from "react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { strapiData } from "@/lib/strapi";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { Link } from "@/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface JournalSlugPageProps {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params }: JournalSlugPageProps) {
  const strapiRes = await strapiData.getJournalBySlug(params.slug).catch(() => ({ data: [] }));
  const post = strapiRes?.data?.[0];
  if (!post) return {};

  return {
    title: `${post.title} | Said Aqqa Journal`,
    description: post.excerpt || post.title,
  };
}

export default async function JournalSlugPage({ params }: JournalSlugPageProps) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Journal' });

  const strapiRes = await strapiData.getJournalBySlug(params.slug).catch(() => ({ data: [] }));
  const post = strapiRes?.data?.[0];

  if (!post) notFound();

  const strapiBase = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const coverSrc = post.coverImage?.url
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
    <div className="bg-black text-white pb-32 min-h-screen">
      {/* Full-bleed hero image */}
      {coverSrc && (
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src={coverSrc}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />
        </div>
      )}

      {/* Header */}
      <div className="container mx-auto px-6 mt-16">
        <RevealOnScroll className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/journal"
            className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase flex items-center gap-2 hover:text-gold transition-colors mb-12"
          >
            <ArrowLeft size={12} /> {t('backToJournal')}
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-zinc-600 text-[10px] tracking-widest uppercase">
            {post.category && (
              <span className="text-gold border border-gold/30 px-3 py-1">{post.category}</span>
            )}
            <span className="flex items-center gap-1.5">
              <Calendar size={10} /> {formattedDate}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={10} /> {post.readTime} min
              </span>
            )}
            {post.author && (
              <span className="text-zinc-500">{post.author}</span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">{post.title}</h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-zinc-400 text-xl font-light italic leading-relaxed mb-12 border-l-2 border-gold/30 pl-6">
              {post.excerpt}
            </p>
          )}

          <div className="w-20 h-[1px] bg-gold/30 mb-16" />

          {/* Rich text content — rendered as HTML from Strapi */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-white
              prose-p:text-zinc-400 prose-p:font-light prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-blockquote:border-gold/30 prose-blockquote:text-zinc-400
              prose-img:rounded-none prose-img:w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom nav */}
          <div className="mt-24 pt-12 border-t border-white/5">
            <div className="flex justify-between items-center">
              <Link
                href="/journal"
                className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase flex items-center gap-2 hover:text-gold transition-colors"
              >
                <ArrowLeft size={12} /> {t('backToJournal')}
              </Link>
              <Link
                href="/contact"
                className="text-gold text-[10px] tracking-[0.4em] uppercase flex items-center gap-2 hover:text-white transition-colors"
              >
                {t('inquireCTA')} <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
