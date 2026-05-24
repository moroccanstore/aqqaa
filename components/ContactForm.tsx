"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const [status, setStatus] = React.useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const t = useTranslations('Contact');

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
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  if (status === "SUCCESS") {
    return (
      <div className="bg-zinc-900 border border-gold/20 p-12 text-center space-y-6">
        <h3 className="text-3xl font-serif text-gold">{t('successTitle')}</h3>
        <p className="text-zinc-400 font-light">{t('successMessage')}</p>
        <button 
          onClick={() => setStatus("IDLE")}
          className="text-[10px] tracking-[0.4em] uppercase text-gold hover:text-white transition-colors"
        >
          {t('sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
          <label className="text-[10px] tracking-widest uppercase text-zinc-500">{t('fullName')}</label>
          <input name="name" required type="text" className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors" />
      </div>
      <div className="space-y-2">
         <label className="text-[10px] tracking-widest uppercase text-zinc-500">{t('email')}</label>
         <input name="email" required type="email" className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors" />
      </div>
      <div className="space-y-2">
         <label className="text-[10px] tracking-widest uppercase text-zinc-500">{t('interest')}</label>
         <select name="interest" className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors appearance-none" defaultValue="Wedding Photography">
            <option value="Wedding Photography">{t('interests.wedding')}</option>
            <option value="Portrait Session">{t('interests.portrait')}</option>
            <option value="Cinematography">{t('interests.cinema')}</option>
            <option value="Other Project">{t('interests.other')}</option>
         </select>
      </div>
      <div className="space-y-2">
         <label className="text-[10px] tracking-widest uppercase text-zinc-500">{t('message')}</label>
         <textarea name="message" required rows={5} className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors"></textarea>
      </div>
      
      {status === "ERROR" && (
        <p className="text-red-500 text-xs italic">{t('errorMessage')}</p>
      )}

      <button 
        disabled={status === "SUBMITTING"}
        type="submit" 
        className="btn-liquid w-full bg-white text-black py-6 text-[10px] tracking-[0.4em] uppercase hover:border-gold transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "SUBMITTING" ? t('sending') : t('send')}
      </button>
    </form>
  );
}
