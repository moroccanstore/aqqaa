import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saidaqqa.com"),
  title: "Said Aqqa Photography | Luxury Wedding Photographer Helsinki & Worldwide",
  description: "Exquisite visual narratives by Said Aqqa. Award-winning luxury wedding, portrait, and commercial photography based in Helsinki and available worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Said Aqqa Photography | Luxury Wedding Photographer Helsinki & Worldwide",
    description: "Exquisite visual narratives by Said Aqqa. Award-winning luxury wedding, portrait, and commercial photography based in Helsinki and available worldwide.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://saidaqqa.com",
    siteName: "Said Aqqa Photography",
    images: [
      {
        url: "/hero-cinematic.png",
        width: 1200,
        height: 630,
        alt: "Said Aqqa Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Said Aqqa Photography | Luxury Wedding Photographer Helsinki & Worldwide",
    description: "Exquisite visual narratives by Said Aqqa. Award-winning luxury wedding, portrait, and commercial photography based in Helsinki and available worldwide.",
    images: ["/hero-cinematic.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Said Aqqa Photography",
  "image": "https://saidaqqa.com/logo.png",
  "@id": "https://saidaqqa.com",
  "url": "https://saidaqqa.com",
  "telephone": "+358407444838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Itäviitta 2",
    "addressLocality": "Espoo",
    "postalCode": "02330",
    "addressCountry": "FI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 60.1472,
    "longitude": 24.6439
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://facebook.com/aqqasaid",
    "https://instagram.com/saidaqqaweddings",
    "https://youtube.com/@saidaqqaphotography"
  ],
  "priceRange": "$$$"
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/navigation';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
       <head>
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         <Script 
           defer 
           data-domain="saidaqqa.com" 
           src="https://plausible.io/js/script.tagged-events.js" 
         />
         <Script id="plausible-setup">
           {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
         </Script>
       </head>
       <body className="bg-black text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
