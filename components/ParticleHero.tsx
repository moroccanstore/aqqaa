import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { RevealOnScroll } from "./AnimationWrappers";
import { Link } from "@/navigation";
import { TrustStrip } from "./TrustStrip";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

interface ParticleHeroProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  height?: "full" | "half";
  showScrollIndicator?: boolean;
}

export const ParticleHero: React.FC<ParticleHeroProps> = ({ 
  backgroundImage,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  height = "full",
  showScrollIndicator = true
}) => {
  return (
    <div className={`relative ${height === "full" ? "h-screen" : "h-[60vh]"} w-full bg-black overflow-hidden flex flex-col justify-center items-center`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
      </div>

      {/* Particle Overlay - Temporarily disabled for stability */}
      {/* 
      <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      </div> 
      */}

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-lg md:max-w-3xl px-6 flex flex-col items-center">
        <RevealOnScroll className="mb-4">
          <span className="text-gold text-[10px] md:text-xs tracking-[0.5em] uppercase font-light">
            {subtitle || "Said Aqqa"}
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="mb-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight">
            {title ? (
              title
            ) : (
              <>Photography & <br /> Visual Storytelling</>
            )}
          </h1>
        </RevealOnScroll>

        {description && (
          <RevealOnScroll delay={0.4} className="mb-10 max-w-2xl">
            <p className="text-white/70 text-sm md:text-lg font-light leading-relaxed tracking-wide">
              {description}
            </p>
          </RevealOnScroll>
        )}

        {(primaryCTA || secondaryCTA) && (
          <RevealOnScroll delay={0.6} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {primaryCTA && (
                <Link 
                  href={primaryCTA.href}
                  className="btn-liquid w-full sm:w-auto px-10 py-4 bg-white text-black text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-gold hover:text-white transition-all duration-500"
                >
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link 
                  href={secondaryCTA.href}
                  className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white text-[10px] tracking-[0.3em] uppercase font-light hover:border-gold hover:text-gold transition-all duration-500 bg-white/5 backdrop-blur-sm"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          </RevealOnScroll>
        )}
        
        {/* Trust Strip Integration - Only show on full height hero (homepage) */}
        {height === "full" && (
          <RevealOnScroll delay={0.8} className="w-full mt-12">
            <TrustStrip />
          </RevealOnScroll>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      )}
    </div>
  );
};
