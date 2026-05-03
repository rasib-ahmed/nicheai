import type { Metadata } from "next";

const POST_META: Record<string, { title: string; description: string }> = {
  "how-to-grow-instagram-2024": {
    title: "How to Grow Your Instagram to 10K Followers in 90 Days",
    description: "The exact content strategy used to grow niche accounts from zero to 10K followers without paid ads.",
  },
  "tiktok-content-strategy": {
    title: "The TikTok Content Strategy That Gets Views in 2025",
    description: "TikTok's algorithm has changed. Here's what actually works today — hooks, posting times, and niche authority.",
  },
  "ai-content-creation-guide": {
    title: "The Complete Guide to AI Content Creation for Social Media",
    description: "Learn how to use AI to generate a month of social media content in under an hour.",
  },
  "hashtag-strategy-2025": {
    title: "Hashtag Strategy in 2025: What Works and What Doesn't",
    description: "The data-driven approach to hashtags that actually drives discovery on Instagram, TikTok, and LinkedIn.",
  },
  "linkedin-thought-leadership": {
    title: "LinkedIn Thought Leadership: How to Get 100K Impressions Per Post",
    description: "The exact format and posting cadence that drives massive organic reach for B2B creators.",
  },
  "content-calendar-for-creators": {
    title: "Why Every Creator Needs a 7-Day Content Calendar",
    description: "A structured 7-day content calendar keeps your audience engaged and your algorithm happy.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_META[slug];

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post does not exist.",
    };
  }

  const url = `https://nichepost.ai/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} — NichePost AI`,
      description: post.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: url },
  };
}

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}