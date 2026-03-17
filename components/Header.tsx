"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, Instagram, Youtube, Facebook } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TopContactStrip } from "./TopContactStrip";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Header = () => {
  const t = useTranslations("Header");
  
  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("weddings"), href: "/weddings" },
    { name: t("videos"), href: "/videos" },
    { name: t("portfolio"), href: "/portfolio" },
    { name: t("about"), href: "/about" },
    { name: t("pricing"), href: "/pricing" },
    { name: t("contact"), href: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-2xl" : "bg-transparent"
      )}
    >
      {/* 1. Top Contact Strip (Intent focused) */}
      {!isScrolled && <TopContactStrip />}

      <div className={cn(
        "container mx-auto px-6 flex justify-between items-center transition-all duration-500",
        isScrolled ? "py-4" : "py-8"
      )}>
        {/* Logo with framed lines */}
        <div className="relative group">
          {/* Top-Left Accent Lines */}
          <div className="absolute -top-4 -left-4 w-12 h-[1px] bg-gold/20 transition-all duration-700 group-hover:w-20 group-hover:bg-gold/40" />
          <div className="absolute -top-4 -left-4 w-[1px] h-12 bg-gold/20 transition-all duration-700 group-hover:h-20 group-hover:bg-gold/40" />
          
          <Link href="/" className="flex flex-col items-center md:items-start">
            <span className="text-white text-2xl md:text-3xl font-serif tracking-[0.4em] uppercase leading-none transition-transform group-hover:scale-[1.02] duration-500">
              Said <span className="text-gold">Aqqa</span>
            </span>
            <span className="text-[8px] md:text-[10px] text-white/40 tracking-[0.8em] uppercase mt-1 font-light group-hover:text-gold/60 transition-colors duration-500">
              {t("photographyVisuals")}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative text-[9px] tracking-[0.4em] uppercase transition-all duration-300 py-1",
                pathname === link.href ? "text-gold" : "text-white/60 hover:text-white"
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100",
                  pathname === link.href && "scale-x-100"
                )} 
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-700",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-serif tracking-widest",
                pathname === link.href ? "text-gold" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Socials */}
        <div className="absolute bottom-10 flex space-x-6 text-gold">
           <a href="https://instagram.com/saidaqqaweddings" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
           <a href="https://youtube.com/@saidaqqaphotography" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
           <a href="https://facebook.com/aqqasaid" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
        </div>
      </div>
    </header>
  );
};
