import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Outfit } from "next/font/google";

import { siteContent } from "@/lib/data";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  title: {
    default: "Guru Prasath — Software engineer / systems that earn trust",
    template: "%s — Guru Prasath",
  },
  description: siteContent.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Guru Prasath — Software engineer / systems that earn trust",
    description: siteContent.description,
    siteName: "Guru Prasath",
    images: [
      {
        url: "/intro-alone.jpeg",
        width: 373,
        height: 322,
        alt: siteContent.hero.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guru Prasath — Software engineer / systems that earn trust",
    description: siteContent.description,
    images: ["/intro-alone.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${figtree.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="atmosphere" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
