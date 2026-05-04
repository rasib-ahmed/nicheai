"use client";

const FEATURES = [
  {
    icon: "💬", cat: "AI CAPTIONS", catColor: "#3b82f6",
    title: "Captions that sound like you",
    desc: "Platform-native captions in your exact tone — casual, professional, bold, or inspirational. Every caption includes a call-to-action built in.",
    footer: "→ 7 captions per calendar · all platforms",
  },
  {
    icon: "#", cat: "HASHTAG GENERATION", catColor: "#6366f1",
    title: "10 hashtags. Every single post.",
    desc: "Stop recycling the same tags. Fresh niche-optimized hashtags for each day — matched to your platform and audience size for maximum reach.",
    footer: "→ 70 unique hashtags per calendar",
  },
  {
    icon: "🖼", cat: "AI COVER IMAGE", catColor: "#10b981",
    title: "One stunning image per calendar",
    desc: "Every calendar gets an AI-generated cover image tailored to your niche and tone. Download in one click — ready for posts, thumbnails, or banners.",
    footer: "→ 1200 × 630px · instant download",
  },
  {
    icon: "📱", cat: "MULTI-PLATFORM", catColor: "#f59e0b",
    title: "Every platform, one tool",
    desc: "Instagram, TikTok, LinkedIn, Twitter, YouTube, Facebook — each platform gets content written natively for its format, limits, and audience behavior.",
    footer: "→ 6 platforms supported",
  },
];

export default function Features({ dark }: { dark: boolean }) {
  return (
    <section id="features" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>

      {/* HEADING */}
      <div className="anim-2" style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(59,130,246,0.1)",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 100, padding: "6px 16px",
          fontSize: 12, fontWeight: 700, color: "#60a5fa",
          letterSpacing: "0.06em", textTransform: "uppercase",
          marginBottom: 20, fontFamily: "var(--font-body)",
        }}>
          ⚡ Everything you need
        </div>

        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(28px,4vw,48px)",
          fontWeight: 800, color: "#fff",
          marginBottom: 16, lineHeight: 1.08,
          letterSpacing: "-2px",
        }}>
          Built for creators who want to{" "}
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            grow faster
          </span>
        </h2>

        <p style={{
          fontSize: 17, color: "#8896b3", lineHeight: 1.7,
          maxWidth: 480, margin: "0 auto", fontFamily: "var(--font-body)",
        }}>
          Four powerful AI tools in one place. No more switching between apps or staring at a blank screen.
        </p>
      </div>

      {/* GRID */}
      <div id="feat-grid" className="anim-3" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
        {FEATURES.map(f => (
          <div key={f.title}
            style={{
              background: "#111827",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
              padding: 32, position: "relative", overflow: "hidden",
              transition: "all 0.25s", cursor: "default",
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

            {/* TOP GLOW LINE */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: `linear-gradient(90deg, transparent, ${f.catColor}40, transparent)`,
            }} />

            {/* ICON */}
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: `${f.catColor}20`,
              border: `1px solid ${f.catColor}35`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, marginBottom: 20,
            }}>
              {f.icon}
            </div>

            {/* CAT BADGE */}
            <div style={{
              display: "inline-flex", marginBottom: 12,
              background: `${f.catColor}15`,
              border: `1px solid ${f.catColor}35`,
              borderRadius: 100, padding: "4px 12px",
              fontSize: 11, fontWeight: 700,
              color: f.catColor, letterSpacing: "0.06em",
              fontFamily: "var(--font-body)",
            }}>
              {f.cat}
            </div>

            <h3 style={{
              fontSize: 20, fontWeight: 700, color: "#fff",
              marginBottom: 10, fontFamily: "var(--font-body)", lineHeight: 1.25,
            }}>{f.title}</h3>

            <p style={{
              fontSize: 14, color: "#8896b3", lineHeight: 1.7,
              marginBottom: 20, fontFamily: "var(--font-body)",
            }}>{f.desc}</p>

            <p style={{
              fontSize: 13, color: "#3a4a66", fontFamily: "var(--font-body)",
              borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16,
            }}>{f.footer}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { #feat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}