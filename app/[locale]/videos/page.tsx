import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { videoProjects } from "@/lib/data/videos";
import { Play } from "lucide-react";

import { ParticleHero } from "@/components/ParticleHero";

export const metadata = {
  title: "Videos | Said Aqqa Photography",
  description: "Cinematic wedding films and visual projects by Said Aqqa.",
};

export default function VideosPage() {
  return (
    <div className="bg-black pb-32 min-h-screen">
      <ParticleHero 
        title="Visual Stories"
        subtitle="Cinematography & Film"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a655a99-5212-4446-b5aa-0f20090d7c49/SAI03757.jpg"
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-serif">Visual Projects</h2>
          <div className="w-20 h-[1px] bg-gold/50 mx-auto mt-12"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {videoProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 0.1}>
              <Link href={`/videos/${project.id}`} className="group block">
                <div className="relative aspect-video overflow-hidden mb-8 bg-zinc-900 border border-white/5">
                   {/* Thumbnail placeholder or real one */}
                   <Image
                      src={project.thumbnail || `https://img.youtube.com/vi/${project.id}/maxresdefault.jpg`}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                         <Play fill="white" size={24} className="ml-1" />
                      </div>
                   </div>
                </div>
                <div className="space-y-2">
                   <span className="text-gold text-[10px] tracking-widest uppercase">{project.category}</span>
                   <h3 className="text-2xl font-serif">{project.title}</h3>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
