import React from "react";
import { getTranslations } from "next-intl/server";
import { strapiData } from "@/lib/strapi";
import { ParticleHero } from "@/components/ParticleHero";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { JournalCard, type JournalPost } from "@/components/JournalCard";
import { Link } from "@/navigation";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Journal.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

const CATEGORIES = ['all', 'stories', 'tips', 'destinations', 'behind-scenes'] as const;
type Category = typeof CATEGORIES[number];

export default async function JournalPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { category?: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Journal' });
  const strapiRes = await strapiData.getJournals().catch(() => ({ data: [] }));
  const posts: JournalPost[] = strapiRes?.data ?? [];

  const activeCategory = (searchParams.category ?? 'all') as Category;

  const filtered = activeCategory === 'all'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06a12517-d328-43dc-960e-8d9cc5e282a6/SAI01269-2.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-serif">{t('heading')}</h1>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto mt-8" />
          <p className="text-zinc-500 font-light mt-8 max-w-xl mx-auto">{t('subheading')}</p>
        </RevealOnScroll>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={cat === 'all' ? '/journal' : `/journal?category=${cat}`}
              className={`px-8 py-3 text-[9px] tracking-[0.4em] uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-black'
                  : 'border border-white/10 text-zinc-400 hover:border-gold/40 hover:text-white'
              }`}
            >
              {t(`filter.${cat}`)}
            </Link>
          ))}
        </div>

        {/* Posts grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filtered.map((post, index) => (
              <JournalCard
                key={post.slug}
                post={post}
                delay={index * 0.05}
                readMoreLabel={t('readMore')}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <p className="text-zinc-600 text-sm font-light tracking-widest uppercase">{t('empty')}</p>
            <p className="text-zinc-700 text-xs mt-4">{t('emptyHint')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
