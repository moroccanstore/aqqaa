"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface ParticleHeroProps {
  title?: string;
  subtitle?: string;
}

/**
 * ParticleHero: A stunning Three.js WebGL particle experience.
 */
interface ParticleHeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: "full" | "half" | "auto";
  particleColor?: string;
  accentColor?: string;
  showAccents?: boolean;
  showScrollIndicator?: boolean;
  className?: string;
}

/**
 * ParticleHero: A highly configurable cinematic WebGL particle experience.
 */
export const ParticleHero: React.FC<ParticleHeroProps> = ({
  title = "Said Aqqa",
  subtitle = "Photography & Visual Storytelling",
  backgroundImage = "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1654262925547-GL9IJZ88FGR1DRW9U1G9/For_Homepage_22813035_10155970875734729_43643127_o.jpg",
  height = "full",
  particleColor = "#D4AF37",
  accentColor = "rgba(212, 175, 55, 0.2)",
  showAccents = true,
  showScrollIndicator = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!threeRef.current) return;

    const container = threeRef.current;
    
    // Config
    const particleCount = 2000;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Particles
    const geometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.005,
      color: particleColor,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;

      // Mouse reaction
      particlesMesh.position.x += (mouse.current.x * 0.5 - particlesMesh.position.x) * 0.05;
      particlesMesh.position.y += (mouse.current.y * 0.5 - particlesMesh.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [particleColor]);

  const heightClasses = {
    full: "h-screen",
    half: "h-[65vh]",
    auto: "h-[50vh]",
  };

  return (
    <section ref={containerRef} className={`relative w-full ${heightClasses[height]} bg-black flex items-center justify-center overflow-hidden ${className}`}>
      {/* Cinematic Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-40 transition-transform duration-1000 ease-out scale-110"
        style={{
          backgroundImage: `url("${getCloudinaryUrl(backgroundImage, { width: 1920 })}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${mouse.current.x * 20}px, ${mouse.current.y * 20}px) scale(1.1)`
        }}
      />
      
      {/* Three.js Particle Layer */}
      <div ref={threeRef} className="absolute inset-0 z-[2] opacity-60 pointer-events-none" />

      {/* Refined Luxury Gradients */}
      {/* Top darkness for header/logo visibility */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/80 to-transparent z-[1]" />
      
      {/* Bottom "high-key" fade to match premium reference image */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-zinc-200/10 via-transparent to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/5 to-transparent z-[1]" />

      <div className="z-10 text-center select-none pointer-events-none px-4">
        <h1 className="text-white text-5xl md:text-8xl font-serif tracking-[0.2em] uppercase mb-4 opacity-95 drop-shadow-2xl">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === 1 && word.toLowerCase() !== "story" ? "text-gold block md:inline" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <div className="flex items-center justify-center space-x-4 opacity-80">
          <div className="h-[1px] w-12 bg-gold/50 hidden md:block" />
          <p className="text-gold text-[10px] md:text-xs tracking-[0.8em] uppercase font-light">
            {subtitle}
          </p>
          <div className="h-[1px] w-12 bg-gold/50 hidden md:block" />
        </div>
      </div>
      
      {/* Luxury Accents (Remaining framing for hero content) */}
      {showAccents && (
        <>
          <div className="absolute bottom-12 right-12 w-32 h-[1px] z-10" style={{ backgroundColor: accentColor }}></div>
          <div className="absolute bottom-12 right-12 w-[1px] h-32 z-10" style={{ backgroundColor: accentColor }}></div>
        </>
      )}
      
      {/* Scroll Indicator */}
      {showScrollIndicator && height === "full" && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-4">
          <span className="text-[8px] text-white/40 tracking-[0.5em] uppercase vertical-rl">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      )}
    </section>
  );
};
