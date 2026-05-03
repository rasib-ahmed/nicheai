import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Strategy Blog",
  description:
    "Actionable social media strategies for creators, marketers, and brands. Grow faster on Instagram, TikTok, LinkedIn, and more.",
  openGraph: {
    title: "Content Strategy Blog — NichePost AI",
    description:
      "Actionable strategies for creators who want to grow on social media.",
    url: "https://nichepost.ai/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Strategy Blog — NichePost AI",
    description: "Grow faster with better content.",
  },
  alternates: { canonical: "https://nichepost.ai/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}