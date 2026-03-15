"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // GSAP's yPercent: 20 -> translate-y up to 20%
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${20 * speed}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, width: "100%", height: "100%" }}>
        {children}
      </motion.div>
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
  return (
    <div className={className}>
      {children}
    </div>
  );
};
