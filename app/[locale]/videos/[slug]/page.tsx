import React from "react";
import { notFound } from "next/navigation";
import { videoProjects } from "@/lib/data/videos";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { ChevronLeft } from "lucide-react";
import { Link, routing } from "@/navigation";

interface VideoDetailPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const locales = routing.locales;
  return locales.flatMap(locale => 
    videoProjects.map((project) => ({
      locale,
      slug: project.id,
    }))
  );
}

export default function VideoDetailPage({ params }: VideoDetailPageProps) {
  const project = videoProjects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link href="/videos" className="text-zinc-500 hover:text-gold flex items-center text-[10px] tracking-[0.3em] uppercase mb-12 transition-colors">
           <ChevronLeft size={16} className="mr-2" /> Back to Videos
        </Link>

        <RevealOnScroll className="mb-20">
           <span className="text-gold text-[10px] tracking-[0.4em] uppercase mb-4 block">{project.category}</span>
           <h1 className="text-4xl md:text-6xl font-serif mb-6">{project.title}</h1>
        </RevealOnScroll>

        <RevealOnScroll className="relative aspect-video w-full bg-zinc-900 border border-white/10 overflow-hidden">
           {project.provider === "youtube" ? (
             <iframe
               src={`https://www.youtube.com/embed/${project.id}?autoplay=1&rel=0`}
               title={project.title}
               className="absolute inset-0 w-full h-full"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             />
           ) : (
             <video 
              src={project.url} 
              autoPlay 
              controls 
              className="absolute inset-0 w-full h-full object-contain"
             />
           )}
        </RevealOnScroll>

        <div className="mt-20 border-t border-white/5 pt-20">
           <h3 className="text-xl font-serif mb-8 text-zinc-400">About this project</h3>
           <p className="text-zinc-500 font-light leading-relaxed max-w-3xl">
              This project represents our commitment to cinematic excellence, capturing the subtle 
              narrative and unspoken emotions of the day. Every transition and every frame is 
              carefully crafted to tell a story that resonates for generations to come.
           </p>
        </div>
      </div>
    </div>
  );
}
