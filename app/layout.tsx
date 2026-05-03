import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://nichepost.ai";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "NichePost AI — 7-Day Content Calendar Generator",
    template: "%s | NichePost AI",
  },
  description:
    "Generate a full 7-day content calendar with AI captions, hashtags, and a cover image in 20 seconds. Free. No signup required.",
  keywords: [
    "content calendar generator",
    "AI content creator",
    "social media captions",
    "hashtag generator",
    "Instagram content",
    "TikTok content",
    "LinkedIn content",
    "NichePost AI",
  ],
  authors: [{ name: "NichePost AI", url: BASE_URL }],
  creator: "NichePost AI",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "NichePost AI",
    title: "NichePost AI — 7-Day Content Calendar Generator",
    description:
      "Generate a full 7-day content calendar with AI captions, hashtags, and a cover image in 20 seconds. Free. No signup required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NichePost AI — Content Calendar Generator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@nichepostai",
    creator: "@nichepostai",
    title: "NichePost AI — 7-Day Content Calendar Generator",
    description:
      "Generate a full 7-day content calendar with AI captions, hashtags, and a cover image in 20 seconds.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}