"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Youtube, Facebook } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Weddings", href: "/weddings" },
  { name: "Videos", href: "/videos" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
        isScrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex flex-col items-center md:items-start group">
          <h1 className="text-white text-2xl md:text-3xl font-serif tracking-[0.4em] uppercase leading-none transition-transform group-hover:scale-[1.02] duration-500">
            Said <span className="text-gold">Aqqa</span>
          </h1>
          <span className="text-[8px] md:text-[10px] text-white/40 tracking-[0.8em] uppercase mt-1 font-light group-hover:text-gold/60 transition-colors duration-500">
            Photography & Visuals
          </span>
        </Link>

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
           <a href="https://instagram.com/saidaqqaweddings" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
           <a href="https://youtube.com/@saidaqqaphotography" target="_blank" rel="noopener noreferrer"><Youtube size={20} /></a>
           <a href="https://facebook.com/aqqasaid" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
        </div>
      </div>
    </header>
  );
};
