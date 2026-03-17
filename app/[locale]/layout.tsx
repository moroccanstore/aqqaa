import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Said Aqqa Photography | Luxury Wedding Photographer Helsinki & Worldwide",
  description: "Exquisite visual narratives by Said Aqqa. Award-winning luxury wedding, portrait, and commercial photography in Helsinki, Espoo, and available for destinations worldwide.",
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
