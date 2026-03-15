"use client";

import React from "react";
import { RevealOnScroll } from "@/components/AnimationWrappers";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import Image from "next/image";

import { contactData } from "@/lib/data/contact";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import { ParticleHero } from "@/components/ParticleHero";

export default function ContactPage() {
  const [status, setStatus] = React.useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mjgargpq", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="bg-black text-white pb-32">
      <ParticleHero 
        title="Get In Touch"
        subtitle="Let's Create Your Story Together"
        backgroundImage={getCloudinaryUrl(contactData.heroImage, { width: 1920, quality: "auto" })}
        height="half"
        showScrollIndicator={false}
      />

      <div className="container mx-auto px-6 mt-32">
        <RevealOnScroll className="max-w-4xl mx-auto text-center mb-24">
           <h2 className="text-5xl md:text-7xl font-serif leading-tight">Let's Connect</h2>
           <p className="text-zinc-500 font-light mt-12 text-lg">
             "Whether it's a grand wedding or a personal portrait session, I'd love to hear about your vision. Let's start the conversation."
           </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl mx-auto">
           {/* Contact Form */}
           <RevealOnScroll className="relative">
              {status === "SUCCESS" ? (
                <div className="bg-zinc-900 border border-gold/20 p-12 text-center space-y-6">
                  <h3 className="text-3xl font-serif text-gold">Thank You</h3>
                  <p className="text-zinc-400 font-light">Your message has been received. I will get back to you within 24-48 hours.</p>
                  <button 
                    onClick={() => setStatus("IDLE")}
                    className="text-[10px] tracking-[0.4em] uppercase text-gold hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] tracking-widest uppercase text-zinc-500">First Name</label>
                        <input name="firstName" required type="text" className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] tracking-widest uppercase text-zinc-500">Last Name</label>
                        <input name="lastName" required type="text" className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] tracking-widest uppercase text-zinc-500">Email Address</label>
                     <input name="email" required type="email" className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] tracking-widest uppercase text-zinc-500">Interested In</label>
                     <select name="interest" className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors appearance-none" defaultValue="Wedding Photography">
                        <option value="Wedding Photography">Wedding Photography</option>
                        <option value="Portrait Session">Portrait Session</option>
                        <option value="Cinematography">Cinematography</option>
                        <option value="Other Project">Other Project</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] tracking-widest uppercase text-zinc-500">Message</label>
                     <textarea name="message" required rows={5} className="w-full bg-zinc-900 border-b border-white/10 p-4 focus:border-gold outline-none transition-colors"></textarea>
                  </div>
                  
                  {status === "ERROR" && (
                    <p className="text-red-500 text-xs italic">Oops! Something went wrong. Please try again or email me directly.</p>
                  )}

                  <button 
                    disabled={status === "SUBMITTING"}
                    type="submit" 
                    className="btn-liquid w-full bg-white text-black py-6 text-[10px] tracking-[0.4em] uppercase hover:border-gold transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "SUBMITTING" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
           </RevealOnScroll>

           {/* Contact Info */}
           <RevealOnScroll className="space-y-16">
              <div className="space-y-8">
                 <h4 className="text-xl font-serif border-b border-white/5 pb-4">Contact Details</h4>
                 <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold">
                       <Mail size={18} />
                    </div>
                    <div>
                       <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">General Inquiries</p>
                       <p className="text-zinc-400">{contactData.details.email}</p>
                    </div>
                 </div>
                 <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold">
                       <Phone size={18} />
                    </div>
                    <div>
                       <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">Call / WhatsApp</p>
                       <p className="text-zinc-400">{contactData.details.phone}</p>
                    </div>
                 </div>
                 <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-gold">
                       <MapPin size={18} />
                    </div>
                    <div>
                       <p className="text-[10px] tracking-widest uppercase text-zinc-600 mb-1">Location</p>
                       <p className="text-zinc-400">{contactData.details.location}</p>
                    </div>
                 </div>
              </div>

               <div className="space-y-8">
                  <h4 className="text-xl font-serif border-b border-white/5 pb-4">Social Media</h4>
                  <div className="flex space-x-8 text-zinc-400">
                     {contactData.socials.map((social) => (
                       <a 
                        key={social.name}
                        href={social.url} 
                        className="hover:text-gold transition-colors flex items-center text-[10px] tracking-[0.3em] uppercase"
                       >
                          {social.name === "Instagram" && <Instagram size={16} className="mr-3" />}
                          {social.name === "YouTube" && <Youtube size={16} className="mr-3" />}
                          {social.name === "Facebook" && <Facebook size={16} className="mr-3" />}
                          {social.name}
                       </a>
                     ))}
                  </div>
               </div>

               {/* Recent Work sidebar grid */}
               <div className="space-y-8 pt-12">
                  <h4 className="text-gold text-[10px] tracking-[0.4em] uppercase">Latest Captured</h4>
                  <div className="grid grid-cols-2 gap-4">
                     {contactData.recentWork.map((img, i) => (
                       <div key={i} className="relative aspect-square overflow-hidden group">
                          <Image 
                            src={getCloudinaryUrl(img.url, { width: 400 })}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 200px"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                       </div>
                     ))}
                  </div>
               </div>
            </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
