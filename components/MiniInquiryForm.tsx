"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { RevealOnScroll } from "./AnimationWrappers";

export default function MiniInquiryForm() {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const t = useTranslations('HomePage.miniForm');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mjgargpq", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            
            {/* Title Section */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                {t('title')}
              </h2>
              <div className="w-12 h-[1px] bg-gold/50" />
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              {status === "SUCCESS" ? (
                <div className="bg-zinc-900/50 border border-gold/20 p-8 text-center backdrop-blur-sm">
                  <p className="text-gold font-serif text-xl">{t('success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <input 
                      name="name" 
                      required 
                      type="text" 
                      placeholder={t('name')}
                      className="w-full bg-zinc-900/30 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-zinc-600" 
                    />
                  </div>
                  <div className="space-y-1">
                    <input 
                      name="email" 
                      required 
                      type="email" 
                      placeholder={t('email')}
                      className="w-full bg-zinc-900/30 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-zinc-600" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <input 
                      name="message" 
                      required 
                      placeholder={t('message')}
                      className="w-full bg-zinc-900/30 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-zinc-600" 
                    />
                  </div>
                  
                  <div className="md:col-span-2 pt-4">
                    <button 
                      disabled={status === "SUBMITTING"}
                      type="submit" 
                      className="btn-liquid w-full md:w-auto px-12 bg-white text-black py-4 text-[10px] tracking-[0.4em] uppercase disabled:opacity-50"
                    >
                      {status === "SUBMITTING" ? "..." : t('send')}
                    </button>
                    {status === "ERROR" && (
                      <p className="text-red-500 text-[10px] mt-4 uppercase tracking-widest italic">Error scaling communication. Please retry.</p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
