import React from "react";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import Image from "next/image";

import { contactData } from "@/lib/data/contact";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { ParticleHero } from "@/components/ParticleHero";
import { ContactForm } from "@/components/ContactForm";
import { strapiData } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations('Contact');
  const strapiContactRes = await strapiData.getContact().catch(() => ({ data: null }));
  const cmsContact = strapiContactRes?.data || {};

  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title={cmsContact.title || t('title')}
        subtitle={cmsContact.subtitle || t('subtitle')}
        backgroundImage={getCloudinaryUrl(cmsContact.heroImage?.url || contactData.heroImage, { width: 1920, quality: "auto" })}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="max-w-4xl mx-auto text-center mb-24">
           <h2 className="text-5xl md:text-7xl font-serif leading-tight">{t('formTitle')}</h2>
           <p className="text-zinc-500 font-light mt-12 text-lg">
             "{cmsContact.description || t('tagline')}"
           </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl mx-auto">
           {/* Contact Form */}
           <RevealOnScroll className="relative">
              <ContactForm />
           </RevealOnScroll>

            {/* Contact Info */}
           <RevealOnScroll className="space-y-16">
              <div className="space-y-8">
                 <h4 className="text-xl font-serif border-b border-white/5 pb-4">{t('details')}</h4>
                 <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold">
                       <Mail size={18} />
                    </div>
                    <div>
                       <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">{t('labels.general')}</p>
                       <p className="text-zinc-400">{contactData.details.email}</p>
                    </div>
                 </div>
                 <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold">
                       <Phone size={18} />
                    </div>
                    <div>
                       <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">{t('labels.call')}</p>
                       <p className="text-zinc-400">{contactData.details.phone}</p>
                    </div>
                 </div>
                 <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold">
                       <MapPin size={18} />
                    </div>
                    <div>
                       <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">{t('labels.location')}</p>
                       <p className="text-zinc-400">{contactData.details.location}</p>
                    </div>
                 </div>
              </div>

               <div className="space-y-8">
                  <h4 className="text-xl font-serif border-b border-white/5 pb-4">{t('social')}</h4>
                  <div className="flex space-x-8 text-zinc-400">
                     {contactData.socials.map((social) => (
                       <a 
                        key={social.name}
                        href={social.url} 
                        className="hover:text-gold transition-colors flex items-center text-[10px] tracking-[0.3em] uppercase"
                       >
                          {social.name === "Instagram" && <Instagram size={16} className="mr-3" />}
                          {social.name === "YouTube" && <Youtube size={16} className="mr-3" />}
                          {social.name === "Facebook" && <Facebook size={16} className="mr-3" />}
                          {social.name}
                       </a>
                     ))}
                  </div>
               </div>

               {/* Recent Work sidebar grid */}
               <div className="space-y-8 pt-12">
                  <h4 className="text-gold text-[10px] tracking-[0.4em] uppercase">{t('latest')}</h4>
                  <div className="grid grid-cols-2 gap-4">
                     {contactData.recentWork.map((img, i) => (
                       <div key={i} className="relative aspect-square overflow-hidden group">
                          <Image 
                            src={getCloudinaryUrl(img.url, { width: 400 })}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 200px"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                       </div>
                     ))}
                  </div>
               </div>
            </RevealOnScroll>
         </div>

         <div className="mt-48">
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
