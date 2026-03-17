import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://saiid-eta.vercel.app"),
  title: "Said Aqqa Photography | Luxury Wedding Photographer Helsinki & Worldwide",
  description: "Exquisite visual narratives by Said Aqqa. Award-winning luxury wedding, portrait, and commercial photography based in Helsinki and available worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Said Aqqa Photography | Luxury Wedding Photographer Helsinki & Worldwide",
    description: "Exquisite visual narratives by Said Aqqa. Award-winning luxury wedding, portrait, and commercial photography based in Helsinki and available worldwide.",
    url: "https://saiid-eta.vercel.app",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
