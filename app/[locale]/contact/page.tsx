import React from "react";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

import { getCloudinaryUrl } from "@/lib/cloudinary";
import { ParticleHero } from "@/components/ParticleHero";
import { ContactForm } from "@/components/ContactForm";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { strapiData } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: `${t('title')} | Said Aqqa Photography`,
    description: t('tagline'),
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Contact' });
  const strapiContactRes = await strapiData.getContact().catch(() => ({ data: null }));
  const cmsContact = strapiContactRes?.data || {};

  const blockedDates: string[] = cmsContact.blockedDates || [];

  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title={cmsContact.title || t('title')}
        subtitle={cmsContact.subtitle || t('subtitle')}
        backgroundImage={getCloudinaryUrl(cmsContact.heroImage?.url || "/hero-cinematic.png", { width: 1920, quality: "auto" })}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">{t('formTitle')}</h2>
          <p className="text-zinc-500 font-light mt-12 text-lg italic">
            &ldquo;{cmsContact.description || t('tagline')}&rdquo;
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-6xl mx-auto">
          {/* Contact Form */}
          <RevealOnScroll className="relative">
            <ContactForm />
          </RevealOnScroll>

          {/* Right Column: Contact Info + Calendar */}
          <RevealOnScroll className="space-y-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h4 className="text-xl font-serif border-b border-white/5 pb-4">{t('details')}</h4>
              
              <a
                href={`mailto:${cmsContact.email || "hello@saidaqqa.com"}`}
                className="flex items-center space-x-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">{t('labels.general')}</p>
                  <p className="text-zinc-300 group-hover:text-gold transition-colors">{cmsContact.email || "hello@saidaqqa.com"}</p>
                </div>
              </a>

              <a
                href={`tel:${(cmsContact.phone || "+358400000000").replace(/\s/g, '')}`}
                className="flex items-center space-x-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">{t('labels.call')}</p>
                  <p className="text-zinc-300 group-hover:text-gold transition-colors">{cmsContact.phone || "+358 40 000 0000"}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${(cmsContact.whatsapp || "+358400000000").replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">WhatsApp</p>
                  <p className="text-zinc-300 group-hover:text-green-400 transition-colors">{t('labels.whatsappCta')}</p>
                </div>
              </a>

              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">{t('labels.location')}</p>
                  <p className="text-zinc-400">{cmsContact.location || "Helsinki, Finland & Worldwide"}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h4 className="text-xl font-serif border-b border-white/5 pb-4">{t('social')}</h4>
              <div className="flex flex-wrap gap-6 text-zinc-400">
                {(cmsContact.socials || []).map((social: any) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors flex items-center text-[10px] tracking-[0.3em] uppercase gap-3"
                  >
                    {social.name === "Instagram" && <Instagram size={16} />}
                    {social.name === "YouTube" && <Youtube size={16} />}
                    {social.name === "Facebook" && <Facebook size={16} />}
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Calendar */}
            <AvailabilityCalendar
              blockedDates={blockedDates}
              label={t('availability.label')}
              bookedLabel={t('availability.booked')}
              availableLabel={t('availability.available')}
            />
          </RevealOnScroll>
        </div>

        {/* Recent Work sidebar grid */}
        <div className="mt-32">
          <RevealOnScroll>
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-gold text-center mb-12">{t('latest')}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {(cmsContact.recentWork || []).map((img: any, i: number) => (
                <div key={i} className="relative aspect-square overflow-hidden group">
                  <Image 
                    src={getCloudinaryUrl(img.url, { width: 400 })}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Recognition strip */}
        <div className="mt-32">
          <RevealOnScroll>
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-gold text-center mb-12">{t('recognition')}</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
              {["/trustfactors/13.png", "/trustfactors/14.png", "/trustfactors/15.png", "/trustfactors/embassy-morocco.png"].map((src, i) => (
                <div key={i} className="relative w-24 h-12 md:w-32 md:h-16">
                  <Image src={src} alt="Brand Partner" fill className="object-contain" />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
