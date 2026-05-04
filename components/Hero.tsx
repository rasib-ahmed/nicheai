"use client";

export default function Hero({ dark }: { dark: boolean }) {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{
      position: "relative", zIndex: 1,
      padding: "120px 40px 120px",
      width: "100%",
      textAlign: "center",
      overflow: "hidden",
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>

      {/* BACKGROUND GRADIENTS */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(139,92,246,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 50% 40% at 80% 90%, rgba(59,130,246,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* GRID OVERLAY */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto" }}>

        {/* BADGE */}
        <div className="anim-1" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(59,130,246,0.1)",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 100, padding: "7px 18px",
          fontSize: 12, fontWeight: 700,
          color: "#60a5fa",
          letterSpacing: "0.06em", textTransform: "uppercase",
          marginBottom: 32, fontFamily: "var(--font-body)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: "glowPulse 2s infinite" }} />
          Powered by AI · Free to start
        </div>

        {/* HEADING — line 1 white, line 2 gradient */}
        <h1 className="anim-2" style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(40px, 7vw, 72px)",
          fontWeight: 800, lineHeight: 1.08,
          letterSpacing: "-2px",
          marginBottom: 28,
        }}>
          {/* LINE 1 — white */}
          <span style={{ color: "#fff", display: "block" }}>
            A full week of content,
          </span>
          {/* LINE 2 — gradient */}
          <span style={{
            display: "block",
            fontStyle: "italic",
            background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            written for you.
          </span>
        </h1>

        {/* DESCRIPTION — what it does, who needs it, why */}
        <div className="anim-3" style={{ marginBottom: 44 }}>
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#8896b3", lineHeight: 1.8,
            fontWeight: 400,
            maxWidth: 580, margin: "0 auto 20px",
            fontFamily: "var(--font-body)",
          }}>
            NichePost AI is built for content creators, coaches, and business owners who are tired of staring at a blank screen every week.
          </p>

          {/* FEATURE POINTS */}
          <div style={{
            display: "flex", justifyContent: "center",
            flexWrap: "wrap", gap: 12, marginBottom: 20,
          }}>
            {[
              "📅 7-day content calendar in seconds",
              "✍️ AI captions matched to your tone",
              "#️⃣ Niche hashtags for every post",
              "🖼 AI cover image included",
              "⬇️ Download as Word doc",
              "🔁 Regenerate anytime",
            ].map(f => (
              <span key={f} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 100, padding: "7px 16px",
                fontSize: 13, fontWeight: 500,
                color: "#c8d8f0",
                fontFamily: "var(--font-body)",
                whiteSpace: "nowrap",
              }}>
                {f}
              </span>
            ))}
          </div>

          <p style={{
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: "#6b7fa3", lineHeight: 1.75,
            maxWidth: 520, margin: "0 auto",
            fontFamily: "var(--font-body)",
          }}>
            Just pick your niche, choose your platform and tone — and get a full week of ready-to-post content delivered instantly. No more wasted hours, no more creative blocks.
          </p>
        </div>

        {/* BUTTON */}
        <div className="anim-4" style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => scrollTo("generator")}
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 12, padding: "15px 40px",
              fontSize: 16, fontWeight: 600,
              cursor: "pointer", fontFamily: "var(--font-body)",
              transition: "all 0.2s",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}>
            See how it works
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section { padding: 80px 20px !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}