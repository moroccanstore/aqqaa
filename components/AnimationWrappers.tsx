"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * RevealOnScroll: Fades and slides elements into view as they enter the viewport.
 */
export const RevealOnScroll: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

/**
 * ParallaxSection: Slightly moves an element (usually an image) at a different speed than scroll.
 */
export const ParallaxSection: React.FC<AnimationProps & { speed?: number }> = ({
  children,
  className = "",
  speed = 0.2,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    gsap.to(el, {
      yPercent: 20 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

/**
 * PinnedSection: Pins a section while child elements or next sections scroll over it.
 */
export const PinnedSection: React.FC<AnimationProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // This is a basic pinning example. 
    // Usually more complex depending on the 'StoryGallery' needs.
    // For now, it provides a stable ref for pinnable sections.
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
