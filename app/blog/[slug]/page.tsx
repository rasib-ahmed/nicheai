"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const POSTS: Record<string, {
  category: string; categoryColor: string; categoryBg: string;
  title: string; author: string; authorInitial: string; authorColor: string;
  date: string; readTime: string; content: string[];
}> = {
  "how-to-grow-instagram-2024": {
    category: "Instagram", categoryColor: "#38bdf8", categoryBg: "rgba(56,189,248,0.12)",
    title: "How to Grow Your Instagram to 10K Followers in 90 Days",
    author: "Sara Khan", authorInitial: "S", authorColor: "#0ea5e9",
    date: "Apr 28, 2025", readTime: "7 min read",
    content: [
      "Growing an Instagram account from zero to 10,000 followers used to take years. Today, with the right content strategy and AI tools, it is achievable in 90 days — without spending a single dollar on ads.",
      "The secret is consistency and relevance. Instagram's algorithm rewards accounts that post regularly in a specific niche. The more focused your content, the faster the algorithm understands who to show it to.",
      "## Step 1: Define Your Niche Ruthlessly",
      "Vague niches like 'fitness' or 'food' are too broad. Instead, go hyper-specific: 'vegan meal prep for busy moms' or 'home workouts for people over 40'. The narrower your niche, the faster you grow because you become the go-to account for that specific audience.",
      "## Step 2: Build a 7-Day Content Calendar",
      "Posting randomly is the biggest mistake new creators make. A structured 7-day calendar ensures you cover different content types — educational, inspirational, entertaining, and promotional — in a balanced rotation. Tools like NichePost AI can generate this entire calendar in 20 seconds.",
      "## Step 3: Optimize Every Caption",
      "Your caption is as important as your image. Lead with a hook in the first line — something that makes people stop scrolling. Ask a question, make a bold statement, or share a surprising fact. Always end with a clear call to action.",
      "## Step 4: Use Hashtags Strategically",
      "Use 5-10 highly relevant hashtags per post. Mix large hashtags (1M+ posts) with medium ones (100K-500K) and small niche ones (under 50K). Small niche hashtags are where you will actually get discovered by your target audience.",
      "## Step 5: Engage Before and After Posting",
      "Spend 30 minutes engaging with accounts in your niche before you post, and reply to every comment within the first hour of publishing. This signals to the algorithm that your account is active and worth promoting.",
      "Following this system consistently for 90 days is what separates accounts that grow from accounts that stagnate. The work is simple — the key is showing up every single day.",
    ],
  },
  "tiktok-content-strategy": {
    category: "TikTok", categoryColor: "#5eead4", categoryBg: "rgba(94,234,212,0.1)",
    title: "The TikTok Content Strategy That Gets Views in 2025",
    author: "James Lee", authorInitial: "J", authorColor: "#2563eb",
    date: "Apr 22, 2025", readTime: "5 min read",
    content: [
      "TikTok's algorithm has evolved dramatically. What worked in 2023 — dance trends, lip syncs, and random viral attempts — barely registers today. In 2025, the platform rewards depth, niche authority, and retention.",
      "## The Hook is Everything",
      "You have 1.5 seconds to stop someone from swiping. Your opening frame needs to answer the question 'why should I keep watching?' immediately. Use text overlays, direct address, or a surprising visual in the first second.",
      "## Niche Down Hard",
      "TikTok's algorithm is a niche machine. The more consistently you post in one niche, the more aggressively the algorithm distributes your content to interested users. Switching topics confuses the algorithm and tanks your reach.",
      "## Retention Over Views",
      "A video with 10,000 views and 80% watch time is better than 100,000 views at 20% watch time. The algorithm prioritizes completion rate. Keep videos concise, cut every second of dead air, and end with a reason to watch again.",
      "## Post Timing Still Matters",
      "Post when your audience is active. For most niches, early morning (6-9 AM) and evening (7-10 PM) in your target timezone perform best. Use TikTok Analytics to confirm your specific audience's peak hours.",
      "The creators winning on TikTok in 2025 are not the ones chasing trends. They are the ones who own a niche, post consistently, and obsess over the quality of their hooks and retention.",
    ],
  },
  "ai-content-creation-guide": {
    category: "AI Tools", categoryColor: "#fcd34d", categoryBg: "rgba(252,211,77,0.1)",
    title: "The Complete Guide to AI Content Creation for Social Media",
    author: "Sara Khan", authorInitial: "S", authorColor: "#0ea5e9",
    date: "Apr 10, 2025", readTime: "10 min read",
    content: [
      "AI has fundamentally changed how content creators work. What used to take a content team an entire week — brainstorming, writing, editing, scheduling — can now be done by a solo creator in under an hour.",
      "## What AI Can Do For You",
      "AI content tools can generate captions, hashtags, post ideas, content calendars, and even images. The best ones understand your niche, tone, and platform — and produce content that sounds like you, not like a robot.",
      "## What AI Cannot Replace",
      "AI cannot replace your personal stories, your unique perspective, or your authentic relationships with your audience. Use AI to handle the mechanical work of content creation so you can focus on what only you can do: being human.",
      "## The Right Workflow",
      "The most effective approach is to use AI to generate a first draft and then edit it to match your voice. Generate a 7-day calendar in seconds, review each post, add a personal touch, and schedule. This cuts content creation time by 80%.",
      "## Choosing the Right Tool",
      "Look for tools that understand your specific niche and platform. Generic AI will produce generic content. NichePost AI, for example, takes your niche, platform, and tone as inputs to generate platform-native content that actually performs.",
      "AI is not a shortcut to skip the work of building an audience. It is a tool that lets you do more of the right work — showing up consistently with quality content — without burning out.",
    ],
  },
  "hashtag-strategy-2025": {
    category: "Strategy", categoryColor: "#34d399", categoryBg: "rgba(52,211,153,0.1)",
    title: "Hashtag Strategy in 2025: What Works and What Doesn't",
    author: "James Lee", authorInitial: "J", authorColor: "#2563eb",
    date: "Apr 3, 2025", readTime: "6 min read",
    content: [
      "Hashtags are not dead. But the way most creators use them is. Copying the same 30 hashtags on every post, using maxed-out tags like #love or #instagood, and treating hashtags as an afterthought — these practices no longer work.",
      "## What Actually Works in 2025",
      "Use 5-10 targeted hashtags rather than 30 generic ones. Each hashtag should describe either your content, your audience, or your niche. The goal is discoverability, not volume.",
      "## The Size Mix",
      "Combine hashtags of different sizes. Large tags (over 1M posts) expose you to huge audiences but you will be buried quickly. Medium tags (100K-500K) offer a balance of reach and longevity. Small niche tags (under 50K) are where you can actually rank and get found by highly targeted followers.",
      "## Platform Differences",
      "Instagram still benefits from hashtags, though their importance has decreased since the introduction of keyword search. TikTok hashtags are primarily for category classification, not discovery. LinkedIn hashtags help with topic feeds but should be used sparingly.",
      "## Research Your Hashtags",
      "Before using a hashtag, check what content is actually performing under it. If the top posts do not look like your content, the hashtag's audience is not your audience. Match hashtags to your content, not just your topic.",
      "The creators who use hashtags strategically treat them like SEO keywords — researched, targeted, and reviewed regularly. That is the difference between hashtags that drive growth and hashtags that do nothing.",
    ],
  },
  "linkedin-thought-leadership": {
    category: "LinkedIn", categoryColor: "#7dd3fc", categoryBg: "rgba(125,211,252,0.12)",
    title: "LinkedIn Thought Leadership: How to Get 100K Impressions Per Post",
    author: "Ahmed Malik", authorInitial: "A", authorColor: "#f59e0b",
    date: "Apr 15, 2025", readTime: "8 min read",
    content: [
      "LinkedIn organic reach is the best it has ever been for individual creators — and most people are completely wasting it. While brands struggle to get 500 impressions, individual thought leaders are routinely hitting 100,000+ on a single post.",
      "## The Format That Works",
      "LinkedIn rewards text-heavy content that tells a story or shares a lesson. The ideal format: a strong opening line (no 'I am excited to share'), followed by a short story or insight, broken into single-sentence paragraphs for readability, ending with a question or takeaway.",
      "## The First Line is Critical",
      "LinkedIn shows only the first 2 lines before the 'see more' button. Your opening line must be so compelling that readers have no choice but to click. Share a counterintuitive insight, a surprising number, or a bold opinion.",
      "## Consistency Compounds",
      "LinkedIn's algorithm rewards consistent posting. Posting 3-5 times per week builds algorithmic momentum. Your 50th post will always outperform your 5th, even if the content is similar, because your account authority has grown.",
      "## Engage Like a Human",
      "Reply to every comment in the first two hours. Comment on other posts in your niche before and after posting. LinkedIn is a conversation platform — accounts that engage generously get distributed generously.",
      "LinkedIn thought leadership is not about being the smartest person in the room. It is about sharing what you have learned, consistently and generously, until the algorithm and the community recognize you as a trusted voice.",
    ],
  },
  "content-calendar-for-creators": {
    category: "Productivity", categoryColor: "#93c5fd", categoryBg: "rgba(147,197,253,0.1)",
    title: "Why Every Creator Needs a 7-Day Content Calendar",
    author: "Ahmed Malik", authorInitial: "A", authorColor: "#f59e0b",
    date: "Mar 28, 2025", readTime: "4 min read",
    content: [
      "The number one reason creators fail to grow is inconsistency. Not bad content. Not the wrong niche. Inconsistency. A 7-day content calendar is the simplest, most effective tool for solving this problem.",
      "## Why Planning Works",
      "When you plan content in advance, you eliminate decision fatigue. You are not staring at your phone at 8 PM wondering what to post. You already know. You just execute.",
      "## The 7-Day Structure",
      "A balanced 7-day calendar should cover educational content (how-to, tips), inspirational content (stories, quotes), entertaining content (relatable moments, humor), and promotional content (your product or service). Varying the content type keeps your audience engaged across the full week.",
      "## Batch Creation",
      "Create all 7 posts in one sitting. Write all the captions, gather all the images, prepare all the hashtags. Batching reduces the mental overhead of content creation and ensures a consistent quality across the week.",
      "## Use AI to Speed Up the Process",
      "Tools like NichePost AI can generate a full 7-day calendar — captions, hashtags, and all — in 20 seconds. Review, edit to add your personal touch, and schedule. The entire process takes under 30 minutes.",
      "A content calendar is not a creative constraint. It is creative freedom. When the structure is handled, you can focus entirely on the quality of your ideas and the authenticity of your voice.",
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", background: "#050d1a", color: "#f8fafc", fontFamily: "-apple-system, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 20px", textAlign: "center" }}>
        <div style={{ fontSize: 48 }}>📭</div>
        <div style={{ fontSize: 22, fontWeight: 700 }}>Post not found</div>
        <Link href="/blog" style={{ fontSize: 14, color: "#7dd3fc", textDecoration: "none" }}>← Back to blog</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#050d1a", color: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes borderGlow { 0%,100%{border-color:rgba(14,165,233,0.25);} 50%{border-color:rgba(125,211,252,0.6);} }

        .nav-back { transition: all 0.2s ease; }
        .nav-back:hover { color: #7dd3fc !important; transform: translateX(-4px); }

        .try-btn { position:relative; overflow:hidden; transition: all 0.3s ease !important; }
        .try-btn::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent); transition:left 0.5s; }
        .try-btn:hover::before { left:100%; }
        .try-btn:hover { transform:translateY(-2px) !important; box-shadow:0 10px 28px rgba(14,165,233,0.45) !important; }

        .post-cta { animation: borderGlow 4s ease-in-out infinite; }

        .cta-btn { position:relative; overflow:hidden; transition:all 0.3s ease !important; }
        .cta-btn::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent); transition:left 0.5s; }
        .cta-btn:hover::before { left:100%; }
        .cta-btn:hover { transform:translateY(-3px) !important; box-shadow:0 12px 32px rgba(14,165,233,0.5) !important; }

        .back-link { transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 6px; }
        .back-link:hover { color: #7dd3fc !important; }

        .author-block { transition: transform 0.2s ease; }
        .author-block:hover { transform: translateX(4px); }

        .avatar-ring { transition: all 0.25s ease; flex-shrink: 0; }
        .avatar-ring:hover { transform: scale(1.08); box-shadow: 0 0 16px rgba(14,165,233,0.5); }

        .content-h2 { position: relative; padding-left: 16px; }
        .content-h2::before { content:''; position:absolute; left:0; top:50%; transform:translateY(-50%); width:3px; height:70%; border-radius:2px; background:linear-gradient(135deg,#0ea5e9,#2563eb); }

        .progress-bar { position:fixed; top:0; left:0; height:2px; background:linear-gradient(90deg,#0ea5e9,#2563eb,#7dd3fc); z-index:100; transition:width 0.1s; }

        .headline-grad {
          background: linear-gradient(135deg, #f8fafc 0%, #7dd3fc 50%, #93c5fd 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease infinite;
        }

        .tag-chip { display:inline-flex; align-items:center; gap:5px; padding:4px 10px; font-size:11px; font-weight:600; transition: all 0.2s; cursor:default; border-radius:999px; }
        .tag-chip:hover { transform:translateY(-2px); }

        .share-btn { transition: all 0.2s ease; }
        .share-btn:hover { background: rgba(14,165,233,0.15) !important; border-color: rgba(14,165,233,0.4) !important; color: #7dd3fc !important; }

        /* ── RESPONSIVE ── */
        .post-nav { padding: 0 48px; height: 68px; }
        .post-nav-logo-text { display: inline; }
        .post-body { max-width: 720px; margin: 0 auto; padding: 56px 40px 80px; }
        .post-title { font-size: 40px; }
        .author-tags { display: flex; }
        .share-row { flex-direction: row; }
        .share-btns { display: flex; }
        .cta-inner { padding: 40px 32px; }

        @media (max-width: 768px) {
          .post-nav { padding: 0 20px !important; height: 60px !important; }
          .post-body { padding: 36px 20px 60px !important; }
          .post-title { font-size: 28px !important; }
          .author-tags { display: none !important; }
          .cta-inner { padding: 28px 20px !important; }
          .cta-inner h2 { font-size: 18px !important; }
          .share-row { flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
        }

        @media (max-width: 560px) {
          .post-nav-logo-text { display: none !important; }
          .post-nav { padding: 0 14px !important; }
          .post-body { padding: 28px 14px 48px !important; }
          .post-title { font-size: 24px !important; }
          .try-btn { padding: 7px 12px !important; font-size: 12px !important; }
          .share-btns { flex-wrap: wrap !important; gap: 6px !important; }
          .share-btn { padding: 6px 10px !important; font-size: 11px !important; }
          .cta-btn { padding: 11px 20px !important; font-size: 13px !important; }
          .post-meta { flex-wrap: wrap; gap: 6px !important; }
        }

        @media (max-width: 400px) {
          .post-title { font-size: 21px !important; }
          .post-body { padding: 24px 12px 40px !important; }
          .cta-inner { padding: 22px 14px !important; }
        }
      `}</style>

      {/* Reading progress bar */}
      <div id="progress" className="progress-bar" style={{ width: "0%" }} />
      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('scroll', function() {
          var el = document.getElementById('progress');
          if (!el) return;
          var scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
          el.style.width = Math.min(scrolled, 100) + '%';
        });
      `}} />

      {/* NAV */}
      <div className="post-nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(14,165,233,0.1)", background: "rgba(5,13,26,0.96)", position: "sticky", top: 0, zIndex: 30, backdropFilter: "blur(20px)" }}>
        <Link href="/blog" className="nav-back" style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", display: "flex", alignItems: "center", gap: 7, textDecoration: "none", fontWeight: 500, flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Blog
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(14,165,233,0.4)", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <span className="post-nav-logo-text" style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>NichePost <span style={{ color: "#7dd3fc" }}>AI</span></span>
        </div>
        <Link href="/generate" className="try-btn" style={{ fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", color: "#fff", textDecoration: "none", boxShadow: "0 4px 12px rgba(14,165,233,0.35)", flexShrink: 0, whiteSpace: "nowrap" }}>
          Try Free →
        </Link>
      </div>

      <div className="post-body">

        {/* Category + meta */}
        <div className="post-meta" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, animation: "fadeUp 0.6s ease-out both", flexWrap: "wrap" }}>
          <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 999, background: post.categoryBg, color: post.categoryColor, border: `1px solid ${post.categoryColor}40`, letterSpacing: "0.06em", textTransform: "uppercase", flexShrink: 0 }}>
            {post.category}
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{post.date}</span>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="headline-grad post-title" style={{ fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 24, animation: "fadeUp 0.7s ease-out 0.1s both" }}>
          {post.title}
        </h1>

        {/* Author */}
        <div className="author-block" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36, paddingBottom: 24, borderBottom: "1px solid rgba(14,165,233,0.1)", animation: "fadeUp 0.6s ease-out 0.2s both", flexWrap: "wrap" }}>
          <div className="avatar-ring" style={{ width: 40, height: 40, borderRadius: "50%", background: post.authorColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#fff", border: "2px solid rgba(14,165,233,0.2)" }}>
            {post.authorInitial}
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{post.author}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Content Strategist at NichePost AI</div>
          </div>
          <div className="author-tags" style={{ marginLeft: "auto", gap: 6, flexWrap: "wrap" }}>
            {[post.category, "Social Media", "Growth"].map(tag => (
              <span key={tag} className="tag-chip" style={{ background: post.categoryBg, color: post.categoryColor, border: `1px solid ${post.categoryColor}30` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ animation: "fadeUp 0.7s ease-out 0.3s both" }}>
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="content-h2" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.015em", marginTop: 36, marginBottom: 12, color: "#f8fafc", lineHeight: 1.3 }}>
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (i === 0) {
              return (
                <p key={i} style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, marginBottom: 20, fontWeight: 400 }}>
                  {block}
                </p>
              );
            }
            return (
              <p key={i} style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 18 }}>
                {block}
              </p>
            );
          })}
        </div>

        {/* Share row */}
        <div className="share-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 44, paddingTop: 24, borderTop: "1px solid rgba(14,165,233,0.1)", animation: "fadeUp 0.6s ease-out 0.4s both", gap: 12 }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontWeight: 500, flexShrink: 0 }}>Share this article</div>
          <div className="share-btns" style={{ display: "flex", gap: 8 }}>
            {["Twitter", "LinkedIn", "Copy link"].map(s => (
              <button key={s} className="share-btn"
                style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.15)", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="post-cta" style={{ marginTop: 44, borderRadius: 20, background: "linear-gradient(135deg,rgba(14,165,233,0.18),rgba(37,99,235,0.1))", border: "1px solid rgba(14,165,233,0.25)", animation: "fadeUp 0.7s ease-out 0.5s both", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "linear-gradient(90deg,transparent,rgba(125,211,252,0.6),transparent)", animation: "shimmer 3s ease-in-out infinite", backgroundSize: "200% 100%" }} />
          <div className="cta-inner" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 999, background: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.3)", color: "#7dd3fc", display: "inline-block", marginBottom: 14, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ✦ Free to use
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Ready to put this into practice?
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 20, lineHeight: 1.65 }}>
              Generate your full 7-day content calendar in 20 seconds — free, no signup needed.
            </p>
            <Link href="/generate" className="cta-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 13, fontSize: 14, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#0ea5e9,#2563eb)", textDecoration: "none", boxShadow: "0 8px 24px rgba(14,165,233,0.4)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              Generate My Free Calendar
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div style={{ marginTop: 36, textAlign: "center" }}>
          <Link href="/blog" className="back-link" style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", textDecoration: "none", fontWeight: 500 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to all articles
          </Link>
        </div>

      </div>
    </div>
  );
}