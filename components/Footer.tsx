import React from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Instagram, Youtube, Facebook, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-6 mb-8 group">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gold/20 p-1 bg-zinc-900 group-hover:border-gold/50 transition-colors duration-500">
                <img src="/logo.png" alt="Said Aqqa Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <h2 className="text-3xl font-serif tracking-widest uppercase">
                Said <span className="text-gold">Aqqa</span>
              </h2>
            </div>
            <p className="text-zinc-400 font-light max-w-sm leading-relaxed mb-8">
              {t("description")}
            </p>
            <div className="flex space-x-6 text-zinc-400">
              <a href="https://instagram.com/saidaqqaweddings" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="https://youtube.com/@saidaqqaphotography" aria-label="YouTube" className="hover:text-gold transition-colors"><Youtube size={20} /></a>
              <a href="https://facebook.com/aqqasaid" aria-label="Facebook" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-8">{t("explore")}</h4>
            <ul className="space-y-4">
              <li><Link href="/weddings" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">{t("weddings")}</Link></li>
              <li><Link href="/portfolio" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">{t("portfolio")}</Link></li>
              <li><Link href="/videos" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">{t("videos")}</Link></li>
              <li><Link href="/pricing" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">{t("priceList")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-8">{t("contact")}</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Mail size={16} className="text-gold mt-1" />
                <span className="text-zinc-400 text-sm font-light">saidaqqa@gmail.com</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin size={16} className="text-gold mt-1" />
                <span className="text-zinc-400 text-sm font-light">Itäviitta 2, 02330 Espoo, Finland</span>
              </li>
              <li className="flex items-start space-x-4">
                <Phone size={16} className="text-gold mt-1" />
                <span className="text-zinc-400 text-sm font-light">+358 407 444 838</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
          <p>© {new Date().getFullYear()} {t("rights")}</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">{t("privacyPolicy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("termsOfService")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
