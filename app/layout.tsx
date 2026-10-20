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
    default: "Guru Prasath — things built, lessons kept",
    template: "%s — Guru Prasath",
  },
  description: siteContent.description,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Guru Prasath — things built, lessons kept",
    description: siteContent.description,
    siteName: "Guru Prasath",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "Guru Prasath — software, small experiments, and the stories behind them.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guru Prasath — things built, lessons kept",
    description: siteContent.description,
    images: ["/social-card.png"],
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
        {children}
      </body>
    </html>
  );
}
