import React from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { strapiData } from "@/lib/strapi";
import { weddings } from "@/lib/data/weddings";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import { ParticleHero } from "@/components/ParticleHero";
import { MapPin, Image as ImageIcon } from "lucide-react";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Weddings.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

const CATEGORIES = ['all', 'finland', 'destination', 'elopement'] as const;
type Category = typeof CATEGORIES[number];

export default async function WeddingsPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { category?: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Weddings' });
  const strapiWeddingsRes = await strapiData.getWeddings().catch(() => ({ data: [] }));
  const strapiWeddings = strapiWeddingsRes?.data || [];
  const activeWeddings = strapiWeddings.length > 0 ? strapiWeddings : weddings;

  const activeCategory = (searchParams.category ?? 'all') as Category;

  const filtered = activeCategory === 'all'
    ? activeWeddings
    : activeWeddings.filter((w: any) => {
        if (!w.tags && !w.category) return true;
        const tags: string[] = w.tags || [];
        return tags.includes(activeCategory) || w.category === activeCategory;
      });

  return (
    <div className="bg-black pb-32">
      <ParticleHero 
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        backgroundImage={getCloudinaryUrl(
          activeWeddings.find((w: any) => w.featured)?.images?.[0]?.url ||
          activeWeddings[0]?.images?.[0]?.url || "",
          { width: 1920, quality: "auto" }
        )}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-serif">{t('heading')}</h1>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto mt-8" />
          <p className="text-zinc-500 font-light mt-8 max-w-xl mx-auto">{t('subheading')}</p>
        </RevealOnScroll>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={cat === 'all' ? '/weddings' : `/weddings?category=${cat}`}
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

        {/* Wedding Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {filtered.map((wedding: any, index: number) => {
            const thumbUrl = wedding.coverImage?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${wedding.coverImage.url}`
              : getCloudinaryUrl(wedding.images?.[0]?.url || "", { width: 1000, quality: "auto" });

            return (
              <RevealOnScroll key={wedding.slug} delay={index % 2 * 0.1}>
                <Link href={`/weddings/${wedding.slug}`} className="group block">
                  <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden mb-8 bg-zinc-900">
                    <Image
                      src={thumbUrl}
                      alt={wedding.title || wedding.couple}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

                    {/* Overlay badge */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-gold text-black text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-medium">
                        {t('viewCollection')}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-serif">{wedding.title || wedding.couple}</h3>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    {wedding.location && (
                      <span className="flex items-center gap-1.5 text-zinc-500 text-[10px] tracking-widest uppercase">
                        <MapPin size={10} className="text-gold" />
                        {wedding.location}
                      </span>
                    )}
                    {wedding.date && (
                      <span className="text-zinc-600 text-[10px] tracking-widest uppercase">
                        {new Date(wedding.date).getFullYear()}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-zinc-600 text-[10px] tracking-widest uppercase ml-auto">
                      <ImageIcon size={10} />
                      {wedding.images?.length ?? 0} {t('photos')}
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-zinc-600 text-sm font-light">{t('noResults')}</p>
          </div>
        )}
      </div>

      {/* CTA Strip */}
      <section className="py-32 text-center px-6 mt-32 border-t border-white/5">
        <RevealOnScroll>
          <p className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase mb-6">{t('cta.label')}</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-12">{t('cta.heading')}</h2>
          <Link href="/contact" className="btn-liquid bg-white text-black px-12 py-5 text-[10px] tracking-[0.4em] uppercase inline-block">
            {t('cta.button')}
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  );
}
