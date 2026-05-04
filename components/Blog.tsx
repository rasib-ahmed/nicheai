"use client";

const CATEGORIES = ["All", "Instagram", "TikTok", "LinkedIn", "Strategy", "AI Tools", "Productivity"];

const BLOGS = [
  {
    slug: "how-to-build-content-calendar",
    cat: "Strategy", catColor: "#3b82f6", emoji: "✍️",
    title: "How to Build a Content Calendar That Gets Engagement",
    excerpt: "A content calendar is your strategic weapon for building an audience that cares. Most creators treat it like a chore, but top creators treat it like a product roadmap.",
    author: "James Lee", authorColor: "#3b82f6", date: "May 1, 2026", read: "5 min read",
  },
  {
    slug: "instagram-vs-tiktok-2026",
    cat: "Instagram", catColor: "#e1306c", emoji: "📱",
    title: "Instagram vs TikTok: Where Should Your Niche Live in 2026?",
    excerpt: "Choosing the wrong platform is the number one reason creators burn out. You can make incredible content and still fail if it lands in the wrong place.",
    author: "Ahmed Malik", authorColor: "#8b5cf6", date: "Apr 28, 2026", read: "7 min read",
  },
  {
    slug: "hashtag-mistakes-killing-reach",
    cat: "Strategy", catColor: "#3b82f6", emoji: "🚀",
    title: "The 3 Hashtag Mistakes Killing Your Reach",
    excerpt: "Hashtags are one of the most misunderstood tools in social media. Done right they put your content in front of thousands. Done wrong they hurt your reach.",
    author: "Sara Khan", authorColor: "#10b981", date: "Apr 22, 2026", read: "4 min read",
  },
  {
    slug: "10-content-ideas-zero-inspiration",
    cat: "AI Tools", catColor: "#f59e0b", emoji: "💡",
    title: "10 Content Ideas When You Have Zero Inspiration",
    excerpt: "Every creator hits a wall. The blank page stares back and your mind goes completely empty. Here are 10 proven content ideas that work in almost any niche.",
    author: "James Lee", authorColor: "#3b82f6", date: "Apr 18, 2026", read: "4 min read",
  },
  {
    slug: "find-perfect-niche-2026",
    cat: "Productivity", catColor: "#10b981", emoji: "🎯",
    title: "How to Find Your Perfect Niche in 2026",
    excerpt: "The biggest mistake new creators make is trying to appeal to everyone. When you speak to everyone you connect with no one. Finding your niche is everything.",
    author: "Ahmed Malik", authorColor: "#8b5cf6", date: "Apr 14, 2026", read: "6 min read",
  },
  {
    slug: "metrics-that-matter-audience-growth",
    cat: "AI Tools", catColor: "#f59e0b", emoji: "📊",
    title: "Which Metrics Actually Matter for Growing Your Audience?",
    excerpt: "Most creators obsess over the wrong numbers. Follower count is one of the least useful metrics for understanding whether your strategy is working.",
    author: "Sara Khan", authorColor: "#10b981", date: "Apr 10, 2026", read: "5 min read",
  },
];

import { useState } from "react";

export default function Blog({ dark }: { dark: boolean }) {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All"
    ? BLOGS
    : BLOGS.filter(b => b.cat === activeCat);

  return (
    <section id="blog" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>

      {/* HEADING */}
      <div className="anim-2" style={{ textAlign: "center", marginBottom: 40 }}>
        <p style={{
          fontSize: 12, fontWeight: 700, color: "#3b82f6",
          letterSpacing: "0.08em", textTransform: "uppercase",
          marginBottom: 12, fontFamily: "var(--font-body)",
        }}>Blog</p>
        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(26px,4vw,44px)",
          fontWeight: 800, color: "#fff",
          marginBottom: 14, lineHeight: 1.08, letterSpacing: "-1.5px",
        }}>
          Tips, trends and creator playbooks
        </h2>
        <p style={{
          fontSize: 16, color: "#8896b3", lineHeight: 1.7,
          maxWidth: 500, margin: "0 auto", fontFamily: "var(--font-body)",
        }}>
          Stay ahead with strategies from the best content creators and marketers.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="anim-3" style={{
        display: "flex", flexWrap: "wrap", gap: 8,
        justifyContent: "center", marginBottom: 40,
      }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setActiveCat(cat)}
            style={{
              background: activeCat === cat
                ? "linear-gradient(135deg, #3b82f6, #6366f1)"
                : "rgba(255,255,255,0.04)",
              color: activeCat === cat ? "#fff" : "#8896b3",
              border: activeCat === cat ? "none" : "1px solid rgba(255,255,255,0.08)",
              borderRadius: 100, padding: "7px 18px",
              fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "var(--font-body)",
              transition: "all 0.2s",
              boxShadow: activeCat === cat ? "0 4px 14px rgba(59,130,246,0.35)" : "none",
            }}
            onMouseEnter={e => {
              if (activeCat !== cat) {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={e => {
              if (activeCat !== cat) {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.color = "#8896b3";
              }
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* BLOG CARDS GRID */}
      <div id="blog-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
      }}>
        {filtered.map((b, i) => (
          <div key={i}
            onClick={() => window.location.href = `/blog/${b.slug}`}
            style={{
              background: "#0d1117",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.25s",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.boxShadow = "none";
            }}>

            {/* THUMBNAIL */}
            <div style={{
              height: 140,
              background: `linear-gradient(135deg, ${b.catColor}20 0%, rgba(13,17,23,0.9) 100%)`,
              display: "flex", alignItems: "center",
              justifyContent: "center", flexDirection: "column",
              gap: 8, position: "relative",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(circle at center, ${b.catColor}15 0%, transparent 70%)`,
              }} />
              <span style={{ fontSize: 38, position: "relative", zIndex: 1 }}>{b.emoji}</span>
              <span style={{
                fontSize: 10, fontWeight: 700,
                color: b.catColor, letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
                position: "relative", zIndex: 1,
              }}>{b.cat}</span>
            </div>

            {/* CONTENT */}
            <div style={{
              padding: "20px 20px 16px",
              flex: 1, display: "flex", flexDirection: "column",
            }}>

              {/* CAT BADGE */}
              <div style={{
                display: "inline-flex", marginBottom: 10,
                background: `${b.catColor}15`,
                border: `1px solid ${b.catColor}30`,
                borderRadius: 100, padding: "3px 10px",
                fontSize: 10, fontWeight: 700,
                color: b.catColor, letterSpacing: "0.06em",
                fontFamily: "var(--font-body)",
                width: "fit-content",
              }}>
                {b.cat.toUpperCase()}
              </div>

              {/* TITLE */}
              <h3 style={{
                fontSize: 15, fontWeight: 700, lineHeight: 1.4,
                color: "#fff", marginBottom: 8,
                fontFamily: "var(--font-body)",
              }}>{b.title}</h3>

              {/* EXCERPT */}
              <p style={{
                fontSize: 13, color: "#8896b3", lineHeight: 1.6,
                marginBottom: 16, fontFamily: "var(--font-body)",
                flex: 1,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical" as const,
                overflow: "hidden",
              }}>{b.excerpt}</p>

              {/* AUTHOR + META */}
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 12,
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${b.authorColor}, ${b.authorColor}88)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800, color: "#fff",
                    fontFamily: "var(--font-body)",
                  }}>
                    {b.author[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#c8d8f0", margin: 0, fontFamily: "var(--font-body)" }}>
                      {b.author}
                    </p>
                    <p style={{ fontSize: 11, color: "#60a5fa", margin: 0, fontFamily: "var(--font-body)" }}>
                      {b.date}
                    </p>
                  </div>
                </div>
                <span style={{
                  fontSize: 11, color: "#8896b3",
                  fontFamily: "var(--font-body)",
                  display: "flex", alignItems: "center", gap: 4,
                }}>
                  🕐 {b.read}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div style={{
          textAlign: "center", padding: "60px 0",
          color: "#3a4a66", fontFamily: "var(--font-body)",
          fontSize: 15,
        }}>
          No posts in this category yet.
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #blog-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          #blog-grid { grid-template-columns: 1fr !important; }
          #blog { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
}