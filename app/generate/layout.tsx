import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Your 7-Day Content Calendar",
  description:
    "Enter your niche, pick your platform, choose your tone — get 7 days of AI captions, hashtags, and a cover image in 20 seconds. Free.",
  openGraph: {
    title: "Generate Your 7-Day Content Calendar — NichePost AI",
    description: "AI-powered content calendar. Free, no signup required.",
    url: "https://nichepost.ai/generate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate Content Calendar — NichePost AI",
    description: "Free AI content calendar in 20 seconds.",
  },
  alternates: { canonical: "https://nichepost.ai/generate" },
};

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}