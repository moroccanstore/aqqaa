"use client";

import React from "react";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * RevealOnScroll: Simple wrapper without framer-motion for debugging.
 */
export const RevealOnScroll: React.FC<AnimationProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

/**
 * ParallaxSection: Simple wrapper without framer-motion for debugging.
 */
export const ParallaxSection: React.FC<AnimationProps & { speed?: number }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={className}>
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
  return (
    <div className={className}>
      {children}
    </div>
  );
};
