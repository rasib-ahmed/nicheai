import type { Metadata } from "next";

const POST_META: Record<string, { title: string; description: string }> = {
  "how-to-grow-instagram-2024": {
    title: "How to Grow Your Instagram to 10K Followers in 90 Days",
    description:
      "The exact content strategy used to grow niche accounts from zero to 10K followers without paid ads — using AI-generated content calendars.",
  },
  "tiktok-content-strategy": {
    title: "The TikTok Content Strategy That Gets Views in 2025",
    description:
      "TikTok's algorithm has changed. Here's what actually works today — hooks, posting times, and why your niche matters more than ever.",
  },
  "ai-content-creation-guide": {
    title: "The Complete Guide to AI Content Creation for Social Media",
    description:
      "Learn how to use AI to generate a month of social media content in under an hour — without losing your authentic voice.",
  },
  "hashtag-strategy-2025": {
    title: "Hashtag Strategy in 2025: What Works and What Doesn't",
    description:
      "The data-driven approach to hashtags that actually drives discovery on Instagram, TikTok, and LinkedIn.",
  },
  "linkedin-thought-leadership": {
    title: "LinkedIn Thought Leadership: How to Get 100K Impressions Per Post",
    description:
      "The exact format, tone, and posting cadence that drives massive organic reach for B2B creators on LinkedIn.",
  },
  "content-calendar-for-creators": {
    title: "Why Every Creator Needs a 7-Day Content Calendar",
    description:
      "A structured 7-day content calendar keeps your audience engaged, your algorithm happy, and your stress levels low.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = POST_META[params.slug];

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post does not exist.",
    };
  }

  const url = `https://nichepost.ai/blog/${params.slug}`;

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