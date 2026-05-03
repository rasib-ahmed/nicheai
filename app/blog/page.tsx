"use client";

import { useState } from "react";
import Link from "next/link";

const POSTS = [
  {
    slug: "how-to-grow-instagram-2024",
    category: "Instagram",
    categoryColor: "#38bdf8",
    categoryBg: "rgba(56,189,248,0.12)",
    title: "How to Grow Your Instagram to 10K Followers in 90 Days",
    excerpt: "The exact content strategy we used to grow three niche accounts from zero to 10,000 followers without paid ads — using AI-generated content calendars.",
    author: "Sara Khan",
    authorInitial: "S",
    authorColor: "#0ea5e9",
    date: "Apr 28, 2025",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "tiktok-content-strategy",
    category: "TikTok",
    categoryColor: "#5eead4",
    categoryBg: "rgba(94,234,212,0.1)",
    title: "The TikTok Content Strategy That Gets Views in 2025",
    excerpt: "TikTok's algorithm has changed dramatically. Here's what actually works today — hooks, posting times, and why your niche matters more than ever.",
    author: "James Lee",
    authorInitial: "J",
    authorColor: "#2563eb",
    date: "Apr 22, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "linkedin-thought-leadership",
    category: "LinkedIn",
    categoryColor: "#7dd3fc",
    categoryBg: "rgba(125,211,252,0.12)",
    title: "LinkedIn Thought Leadership: How to Get 100K Impressions Per Post",
    excerpt: "Most LinkedIn posts get zero traction. We break down the exact format, tone, and posting cadence that drives massive organic reach for B2B creators.",
    author: "Ahmed Malik",
    authorInitial: "A",
    authorColor: "#f59e0b",
    date: "Apr 15, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "ai-content-creation-guide",
    category: "AI Tools",
    categoryColor: "#fcd34d",
    categoryBg: "rgba(252,211,77,0.1)",
    title: "The Complete Guide to AI Content Creation for Social Media",
    excerpt: "AI tools have changed content creation forever. Learn how to use AI to generate a month of content in under an hour — without losing your authentic voice.",
    author: "Sara Khan",
    authorInitial: "S",
    authorColor: "#0ea5e9",
    date: "Apr 10, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "hashtag-strategy-2025",
    category: "Strategy",
    categoryColor: "#34d399",
    categoryBg: "rgba(52,211,153,0.1)",
    title: "Hashtag Strategy in 2025: What Works and What Doesn't",
    excerpt: "Hashtags are not dead — but how you use them has completely changed. Here's the data-driven approach to hashtags that actually drives discovery.",
    author: "James Lee",
    authorInitial: "J",
    authorColor: "#2563eb",
    date: "Apr 3, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "content-calendar-for-creators",
    category: "Productivity",
    categoryColor: "#93c5fd",
    categoryBg: "rgba(147,197,253,0.1)",
    title: "Why Every Creator Needs a 7-Day Content Calendar",
    excerpt: "Posting randomly kills your growth. A structured 7-day content calendar keeps your audience engaged, your algorithm happy, and your stress levels low.",
    author: "Ahmed Malik",
    authorInitial: "A",
    authorColor: "#f59e0b",
    date: "Mar 28, 2025",
    readTime: "4 min read",
    featured: false,
  },
];

const CATEGORIES = ["All", "Instagram", "TikTok", "LinkedIn", "AI Tools", "Strategy", "Productivity"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = POSTS.find(p => p.featured)!;
  const filtered = POSTS.filter(p => !p.featured && (activeCategory === "All" || p.category === activeCategory));

  return (
    <div style={{ minHeight: "100vh", background: "#050d1a", color: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scanH { 0%{transform:translateX(-100%);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateX(100%);opacity:0} }
        @keyframes borderGlow { 0%,100%{border-color:rgba(14,165,233,0.25);} 50%{border-color:rgba(125,211,252,0.6);} }

        .blog-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .blog-card:hover { transform: translateY(-6px); border-color: rgba(14,165,233,0.5) !important; box-shadow: 0 20px 50px rgba(14,165,233,0.15); }

        .cat-pill { transition: all 0.2s ease; cursor: pointer; }
        .cat-pill:hover { border-color: rgba(14,165,233,0.4) !important; color: #7dd3fc !important; }

        .nav-home { transition: all 0.2s ease; }
        .nav-home:hover { color: #7dd3fc !important; transform: translateX(-3px); }

        .try-free-btn { position: relative; overflow: hidden; transition: all 0.3s ease !important; }
        .try-free-btn::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent); transition:left 0.5s; }
        .try-free-btn:hover::before { left:100%; }
        .try-free-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(14,165,233,0.4) !important; }

        .cta-btn { position: relative; overflow: hidden; transition: all 0.3s ease !important; }
        .cta-btn::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent); transition:left 0.5s; }
        .cta-btn:hover::before { left:100%; }
        .cta-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 10px 28px rgba(14,165,233,0.45) !important; }

        .footer-lnk { transition: all 0.2s ease; }
        .footer-lnk:hover { color: #7dd3fc !important; transform: translateY(-2px); }

        .featured-card { animation: borderGlow 4s ease-in-out infinite; position: relative; overflow: hidden; }
        .featured-card::before { content:''; position:absolute; top:0; left:-100%; width:60%; height:2px; background:linear-gradient(90deg,transparent,rgba(125,211,252,0.6),transparent); animation:scanH 4s ease-in-out infinite; pointer-events:none; }

        .headline-gradient {
          background: linear-gradient(135deg, #7dd3fc, #93c5fd, #38bdf8);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 5s ease infinite;
        }

        .read-more { transition: all 0.2s ease; display:inline-flex; align-items:center; gap:6px; }
        .read-more:hover { gap: 10px; color: #7dd3fc !important; }

        .post-visual { overflow: hidden; position: relative; }
        .post-visual::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(14,165,233,0.06),transparent); animation:scanH 3s ease-in-out infinite; }

        /* ── RESPONSIVE ── */
        .blog-nav { padding: 0 48px; height: 68px; }
        .blog-content { max-width: 1100px; margin: 0 auto; padding: 64px 40px; }
        .blog-footer { padding: 28px 48px; }

        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .featured-preview { display: block; }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .cta-box { padding: 48px 40px; }
        .cta-title { font-size: 32px; }

        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .featured-preview { display: none !important; }
        }

        @media (max-width: 768px) {
          .blog-nav { padding: 0 20px !important; height: 60px !important; }
          .blog-content { padding: 40px 20px !important; }
          .blog-footer { padding: 20px 24px !important; flex-direction: column !important; text-align: center !important; gap: 10px !important; }
          .blog-footer-links { justify-content: center !important; }
          .blog-h1 { font-size: 34px !important; }
          .blog-sub { font-size: 15px !important; }
          .featured-card { padding: 24px 20px !important; margin-bottom: 32px !important; }
          .featured-title { font-size: 20px !important; }
          .posts-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-box { padding: 32px 24px !important; }
          .cta-title { font-size: 24px !important; }
        }

        @media (max-width: 560px) {
          .blog-nav-logo-text { display: none; }
          .posts-grid { grid-template-columns: 1fr !important; }
          .blog-h1 { font-size: 28px !important; }
          .blog-content { padding: 32px 16px !important; }
          .featured-card { padding: 20px 16px !important; }
          .cat-row { gap: 6px !important; }
          .cat-pill { padding: 5px 12px !important; font-size: 11px !important; }
          .cta-box { padding: 28px 16px !important; }
        }

        @media (max-width: 400px) {
          .blog-nav { padding: 0 12px !important; }
          .try-free-btn { padding: 7px 12px !important; font-size: 12px !important; }
          .blog-h1 { font-size: 24px !important; }
        }
      `}</style>

      {/* NAV */}
      <div className="blog-nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(14,165,233,0.1)", background: "rgba(5,13,26,0.96)", position: "sticky", top: 0, zIndex: 30, backdropFilter: "blur(20px)" }}>
        <Link href="/" className="nav-home" style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", display: "flex", alignItems: "center", gap: 7, textDecoration: "none", fontWeight: 500, flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Home
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(14,165,233,0.4)", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <span className="blog-nav-logo-text" style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>NichePost <span style={{ color: "#7dd3fc" }}>AI</span></span>
        </div>
        <Link href="/generate" className="try-free-btn" style={{ fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 10, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 4px 12px rgba(14,165,233,0.35)", flexShrink: 0, whiteSpace: "nowrap" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Try Free
        </Link>
      </div>

      <div className="blog-content">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48, animation: "fadeUp 0.7s ease-out both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 999, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.3)", color: "#7dd3fc", marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Content Strategy Blog
          </div>
          <h1 className="blog-h1" style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.1 }}>
            Grow faster with{" "}
            <span className="headline-gradient">better content</span>
          </h1>
          <p className="blog-sub" style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Actionable strategies for creators, marketers, and brands who want to grow on social media.
          </p>
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
          <div className="blog-card featured-card" style={{ background: "linear-gradient(135deg,rgba(14,165,233,0.15),rgba(37,99,235,0.08))", border: "1px solid rgba(14,165,233,0.25)", borderRadius: 24, padding: "36px 40px", marginBottom: 48, animation: "fadeUp 0.7s ease-out 0.1s both" }}>
            <div className="featured-grid">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 999, background: featured.categoryBg, color: featured.categoryColor, border: `1px solid ${featured.categoryColor}40`, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {featured.category}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999, background: "rgba(125,211,252,0.12)", border: "1px solid rgba(125,211,252,0.3)", color: "#7dd3fc" }}>
                    ✦ Featured
                  </span>
                </div>
                <h2 className="featured-title" style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: 12, color: "#f8fafc" }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: featured.authorColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                    {featured.authorInitial}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{featured.author}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{featured.date} · {featured.readTime}</div>
                  </div>
                  <div className="read-more" style={{ marginLeft: "auto", fontSize: 13, fontWeight: 600, color: "#7dd3fc" }}>
                    Read article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>

              {/* Right side preview — hidden on mobile via CSS */}
              <div className="featured-preview" style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.12)", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Monday: Vegan Monday Kickoff", "Tuesday: Tasty Tuesday Recipe", "Wednesday: Wellness Wednesday", "Thursday: Throwback Thursday", "Friday: Friday Feels"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 10, background: i === 0 ? "rgba(14,165,233,0.15)" : "rgba(14,165,233,0.04)", border: `1px solid ${i === 0 ? "rgba(14,165,233,0.3)" : "rgba(14,165,233,0.08)"}`, fontSize: 12, color: i === 0 ? "#7dd3fc" : "rgba(255,255,255,0.45)" }}>
                    <div style={{ width: 20, height: 20, borderRadius: 5, background: i === 0 ? "rgba(14,165,233,0.3)" : "rgba(14,165,233,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: i === 0 ? "#7dd3fc" : "rgba(125,211,252,0.3)", flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    {item}
                  </div>
                ))}
                <div style={{ textAlign: "center", fontSize: 11, color: "rgba(125,211,252,0.25)", marginTop: 2 }}>7-day calendar preview</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Category filter */}
        <div className="cat-row" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28, animation: "fadeUp 0.6s ease-out 0.2s both" }}>
          {CATEGORIES.map(cat => (
            <span key={cat} className="cat-pill"
              onClick={() => setActiveCategory(cat)}
              style={{ fontSize: 12, fontWeight: 600, padding: "6px 16px", borderRadius: 999, border: `1px solid ${activeCategory === cat ? "rgba(14,165,233,0.6)" : "rgba(14,165,233,0.15)"}`, background: activeCategory === cat ? "rgba(14,165,233,0.15)" : "rgba(14,165,233,0.04)", color: activeCategory === cat ? "#7dd3fc" : "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Post grid */}
        <div className="posts-grid">
          {filtered.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div className="blog-card" style={{ background: "rgba(14,165,233,0.03)", border: "1px solid rgba(14,165,233,0.1)", borderRadius: 20, overflow: "hidden", height: "100%", animation: `fadeUp 0.6s ease-out ${0.1 * i}s both` }}>
                <div className="post-visual" style={{ height: 130, background: `linear-gradient(135deg, ${post.categoryBg}, rgba(5,13,26,0.8))`, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(14,165,233,0.08)" }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(14,165,233,0.12), transparent 60%)" }} />
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 5 }}>
                      {post.category === "Instagram" ? "📸" : post.category === "TikTok" ? "🎵" : post.category === "LinkedIn" ? "💼" : post.category === "AI Tools" ? "✦" : post.category === "Strategy" ? "#" : "📅"}
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: post.categoryColor, textTransform: "uppercase" }}>{post.category}</div>
                  </div>
                </div>
                <div style={{ padding: "18px 20px 20px" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: post.categoryBg, color: post.categoryColor, border: `1px solid ${post.categoryColor}30`, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {post.category}
                  </span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.4, marginTop: 10, marginBottom: 8, color: "#f8fafc" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>
                    {post.excerpt}
                  </p>
                  <div style={{ borderTop: "1px solid rgba(14,165,233,0.08)", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: post.authorColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                        {post.authorInitial}
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{post.author}</div>
                        <div style={{ fontSize: 10, color: "rgba(125,211,252,0.3)" }}>{post.date}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 10, color: "rgba(125,211,252,0.35)", display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "64px 0", color: "rgba(125,211,252,0.2)" }}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>📭</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>No posts in this category yet</div>
            <div style={{ fontSize: 13, marginTop: 6 }}>Check back soon — we publish weekly.</div>
          </div>
        )}

        {/* CTA */}
        <div className="cta-box" style={{ marginTop: 64, borderRadius: 24, background: "linear-gradient(135deg,rgba(14,165,233,0.18),rgba(37,99,235,0.1))", border: "1px solid rgba(14,165,233,0.25)", textAlign: "center", animation: "fadeUp 0.7s ease-out 0.3s both", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,transparent,rgba(125,211,252,0.6),transparent)", animation: "scanH 4s ease-in-out infinite" }} />
          <div style={{ fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 999, background: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.3)", color: "#7dd3fc", display: "inline-block", marginBottom: 16, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            ✦ Free to use
          </div>
          <h2 className="cta-title" style={{ fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.2 }}>
            Ready to stop guessing<br />and start growing?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", marginBottom: 24, lineHeight: 1.6 }}>
            Generate your 7-day content calendar in 20 seconds. No signup required.
          </p>
          <Link href="/generate" className="cta-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#0ea5e9,#2563eb)", textDecoration: "none", boxShadow: "0 8px 28px rgba(14,165,233,0.4)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Generate My Free Calendar
          </Link>
        </div>

      </div>

      {/* Footer */}
      <footer className="blog-footer" style={{ borderTop: "1px solid rgba(14,165,233,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(14,165,233,0.3)", flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>NichePost <span style={{ color: "#7dd3fc" }}>AI</span></span>
        </div>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} NichePost AI</span>
        <div className="blog-footer-links" style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Terms", "Generate"].map(item => (
            <Link key={item} className="footer-lnk" href={item === "Generate" ? "/generate" : `/${item.toLowerCase()}`} style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontWeight: 500 }}>
              {item}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}