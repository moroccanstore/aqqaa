"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { RevealOnScroll } from "./AnimationWrappers";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQProps {
  title?: string;
  description?: string;
}

export const FAQ: React.FC<FAQProps> = ({ title, description }) => {
  const t = useTranslations("HomePage.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <RevealOnScroll>
            <span className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4 block">{t("information")}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              {title || t("title")}
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              {description || t("description")}
            </p>
          </RevealOnScroll>
        </div>

        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.05} className="border-b border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "text-lg font-light tracking-wide transition-colors duration-300",
                  openIndex === index ? "text-gold" : "text-white/70 group-hover:text-white"
                )}>
                  {faq.q}
                </span>
                <span className="text-gold p-2">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                openIndex === index ? "max-h-[300px] pb-8 opacity-100" : "max-h-0 opacity-0"
              )}>
                <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
