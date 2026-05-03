// Yeh file ke bilkul TOP pe — "use client" se PEHLE
export const metadata = {
  title: "Generate Your 7-Day Content Calendar",
  description:
    "Enter your niche, pick your platform, choose your tone — and get 7 days of AI-generated captions, hashtags, and a cover image in 20 seconds.",
  openGraph: {
    title: "Generate Your 7-Day Content Calendar — NichePost AI",
    description:
      "AI-powered content calendar generator. Free, no signup required.",
    url: "https://nichepost.ai/generate",
  },
  twitter: {
    title: "Generate Your 7-Day Content Calendar — NichePost AI",
    description: "Free AI content calendar in 20 seconds.",
  },
  alternates: {
    canonical: "https://nichepost.ai/generate",
  },
};

"use client";
// ... baaki code same rehta hai
"use client";

import { useState } from "react";
import Link from "next/link";

interface DayPost {
  day: number;
  title: string;
  caption: string;
  hashtags: string[];
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="copy-btn"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      style={{
        padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
        background: copied ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.07)",
        color: copied ? "#34d399" : "rgba(255,255,255,0.6)",
        border: `1px solid ${copied ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.1)"}`,
        cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit",
      }}
    >
      {copied ? "✓ Copied!" : "Copy"}
    </button>
  );
}

export default function GeneratePage() {
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [days, setDays] = useState<DayPost[]>([]);
  const [coverImg, setCoverImg] = useState<string | null>(null);
  const [imgLoading, setImgLoading] = useState(false);

  const DAY_NAMES = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  const generate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim() || !platform || !tone) return;
    setLoading(true);
    setError(null);
    setDays([]);
    setCoverImg(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ niche: niche.trim(), platform, tone }),
      });
      if (!res.ok) { const e = await res.json(); throw new Error(e.error || "Failed"); }
      const data = await res.json();
      setDays(data.days);
      setLoading(false);
      setImgLoading(true);
      try {
        const ir = await fetch("/api/image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ niche: niche.trim(), platform, tone }),
        });
        if (ir.ok) { const id = await ir.json(); setCoverImg(id.url); }
      } catch { } finally { setImgLoading(false); }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#050d1a", color: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanH { 0%{transform:translateX(-100%);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateX(100%);opacity:0} }
        @keyframes cardFlip { from{opacity:0;transform:perspective(600px) rotateX(-10deg) translateY(16px)} to{opacity:1;transform:perspective(600px) rotateX(0) translateY(0)} }
        @keyframes tagPop { 0%{opacity:0;transform:scale(0.6)} 70%{transform:scale(1.1)} 100%{opacity:1;transform:scale(1)} }
        @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes ringExpand { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(2.2);opacity:0} }
        @keyframes morphGlow { 0%,100%{box-shadow:0 0 30px rgba(14,165,233,0.3)} 50%{box-shadow:0 0 60px rgba(37,99,235,0.4),0 0 100px rgba(14,165,233,0.2)} }
        @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes resultReveal { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes neonText { 0%,100%{text-shadow:0 0 10px rgba(125,211,252,0.8)} 50%{text-shadow:0 0 20px rgba(147,197,253,0.9),0 0 40px rgba(147,197,253,0.4)} }
        @keyframes hologram { 0%,100%{opacity:1} 93%{opacity:0.4} 94%{opacity:1} 96%{opacity:0.6} 97%{opacity:1} }

        ::placeholder { color: rgba(255,255,255,0.22) !important; }
        select option { background: #050d1a; color: #f8fafc; }
        select { color-scheme: dark; }

        /* ── RESPONSIVE ── */
        .gen-topbar-inner { padding: 0 40px; }
        .gen-main-layout {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px;
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 32px;
          align-items: start;
        }
        .gen-form-sticky { position: sticky; top: 84px; }
        .gen-days-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 14px;
        }
        .gen-empty-state { height: 480px; }
        .gen-loading-state { height: 480px; }

        @media (max-width: 900px) {
          .gen-main-layout {
            grid-template-columns: 1fr !important;
            padding: 24px 20px !important;
            gap: 24px !important;
          }
          .gen-form-sticky {
            position: relative !important;
            top: 0 !important;
          }
          .gen-empty-state { height: 320px !important; }
          .gen-loading-state { height: 320px !important; }
        }

        @media (max-width: 768px) {
          .gen-topbar-inner { padding: 0 20px !important; }
          .gen-main-layout { padding: 20px 16px !important; gap: 20px !important; }
          .gen-days-grid { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 540px) {
          .gen-days-grid { grid-template-columns: 1fr !important; }
          .gen-form-card-inner { padding: 20px 18px !important; }
          .gen-form-header { padding: 20px 18px 16px !important; }
          .gen-form-footer { padding: 12px 18px !important; gap: 12px !important; flex-wrap: wrap; justify-content: center; }
          .gen-result-header { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .cover-img-header { flex-wrap: wrap; gap: 8px !important; }
        }

        @media (max-width: 400px) {
          .gen-main-layout { padding: 16px 12px !important; }
          .gen-topbar-inner { padding: 0 14px !important; }
        }
      `}</style>

      {/* ── TOP BAR ── */}
      <div className="gen-topbar" style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(5,13,26,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(14,165,233,0.1)" }}>
        <div className="gen-topbar-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", transition: "color 0.2s", flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#7dd3fc"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            <span style={{ whiteSpace: "nowrap" }}>Home</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="gen-logo-icon" style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(14,165,233,0.4)", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, whiteSpace: "nowrap" }}>NichePost <span style={{ color: "#7dd3fc", animation: "neonText 4s ease-in-out infinite" }}>AI</span></span>
          </div>
          <div style={{ width: 80, flexShrink: 0 }} />
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="gen-main-layout">

        {/* ── FORM CARD ── */}
        <div className="gen-form-sticky">
          <div className="gen-form-card" style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 24, overflow: "hidden", animation: "morphGlow 6s ease-in-out infinite" }}>

            {/* Header */}
            <div className="gen-form-header" style={{ padding: "28px 28px 22px", borderBottom: "1px solid rgba(14,165,233,0.1)", background: "rgba(14,165,233,0.04)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(125,211,252,0.6),transparent)", animation: "scanH 6s ease-in-out infinite" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(14,165,233,0.4)", animation: "breathe 3s ease-in-out infinite", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#f8fafc", letterSpacing: "-0.01em" }}>Generate Your Calendar</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(125,211,252,0.5)", lineHeight: 1.5 }}>3 inputs. 7 days of content. Ready in 20 seconds.</p>
            </div>

            {/* Form */}
            <form onSubmit={generate} className="gen-form-card-inner" style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>

              {/* Niche */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "rgba(125,211,252,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Niche</label>
                  <span style={{ fontSize: 11, color: "rgba(125,211,252,0.3)" }}>Be specific for better results</span>
                </div>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <input type="text" value={niche} onChange={e => setNiche(e.target.value)}
                    placeholder="e.g. Vegan fitness for busy moms" required className="gen-input"
                    style={{ width: "100%", padding: "13px 14px 13px 42px", borderRadius: 14, fontSize: 14, color: "#f8fafc", background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)", outline: "none", fontFamily: "inherit", transition: "all 0.25s" }}
                    onFocus={e => { e.target.style.borderColor = "rgba(14,165,233,0.6)"; e.target.style.background = "rgba(14,165,233,0.1)"; e.target.style.boxShadow = "0 0 0 3px rgba(14,165,233,0.12)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(14,165,233,0.2)"; e.target.style.background = "rgba(14,165,233,0.06)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              {/* Platform */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "rgba(125,211,252,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Platform</label>
                  <span style={{ fontSize: 11, color: "rgba(125,211,252,0.3)" }}>Where will you post?</span>
                </div>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <select value={platform} onChange={e => setPlatform(e.target.value)} required className="gen-input"
                    style={{ width: "100%", padding: "13px 40px 13px 42px", borderRadius: 14, fontSize: 14, color: platform ? "#f8fafc" : "rgba(125,211,252,0.3)", background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)", outline: "none", fontFamily: "inherit", appearance: "none", WebkitAppearance: "none", cursor: "pointer", colorScheme: "dark", transition: "all 0.25s" }}
                    onFocus={e => { e.target.style.borderColor = "rgba(14,165,233,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(14,165,233,0.12)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(14,165,233,0.2)"; e.target.style.boxShadow = "none"; }}
                  >
                    <option value="">Select a platform...</option>
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter / X">Twitter / X</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Facebook">Facebook</option>
                  </select>
                  <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
              </div>

              {/* Tone */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "rgba(125,211,252,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Tone of Voice</label>
                  <span style={{ fontSize: 11, color: "rgba(125,211,252,0.3)" }}>How should it sound?</span>
                </div>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <select value={tone} onChange={e => setTone(e.target.value)} required className="gen-input"
                    style={{ width: "100%", padding: "13px 40px 13px 42px", borderRadius: 14, fontSize: 14, color: tone ? "#f8fafc" : "rgba(125,211,252,0.3)", background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)", outline: "none", fontFamily: "inherit", appearance: "none", WebkitAppearance: "none", cursor: "pointer", colorScheme: "dark", transition: "all 0.25s" }}
                    onFocus={e => { e.target.style.borderColor = "rgba(14,165,233,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(14,165,233,0.12)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(14,165,233,0.2)"; e.target.style.boxShadow = "none"; }}
                  >
                    <option value="">Select a tone...</option>
                    <option value="Casual & Fun">Casual &amp; Fun</option>
                    <option value="Professional">Professional</option>
                    <option value="Inspirational">Inspirational</option>
                    <option value="Educational">Educational</option>
                    <option value="Humorous">Humorous</option>
                    <option value="Bold & Direct">Bold &amp; Direct</option>
                  </select>
                  <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: "rgba(14,165,233,0.1)" }} />

              {/* Submit */}
              <button type="submit"
                disabled={loading || !niche.trim() || !platform || !tone}
                className="gen-submit-btn"
                style={{ width: "100%", padding: "15px", borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#fff",
                  background: (loading || !niche.trim() || !platform || !tone) ? "rgba(14,165,233,0.3)" : "linear-gradient(135deg,#0ea5e9,#2563eb)",
                  border: "none", cursor: (loading || !niche.trim() || !platform || !tone) ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: "0 6px 24px rgba(14,165,233,0.3)", fontFamily: "inherit",
                }}>
                {loading ? (
                  <><div className="loading-ring" style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />Generating...</>
                ) : (
                  <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>Generate Content</>
                )}
              </button>

              {error && (
                <div style={{ padding: "12px 16px", borderRadius: 12, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#fca5a5", fontSize: 13, display: "flex", alignItems: "center", gap: 8, animation: "fadeUp 0.3s ease-out both" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {error}
                </div>
              )}
            </form>

            {/* Form footer */}
            <div className="gen-form-footer" style={{ padding: "14px 28px", borderTop: "1px solid rgba(14,165,233,0.1)", display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              {["Free to use", "No signup needed", "Ready in 20s"].map(item => (
                <div key={item} className="footer-badge" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(125,211,252,0.35)" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(52,211,153,0.8)", animation: "breathe 2s ease-in-out infinite", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── OUTPUT AREA ── */}
        <div>

          {/* Empty state */}
          {!days.length && !loading && (
            <div className="gen-empty-state" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(14,165,233,0.02)", border: "1px dashed rgba(14,165,233,0.15)", borderRadius: 24, color: "rgba(125,211,252,0.25)", gap: 12, padding: "40px 20px" }}>
              <div className="empty-state-icon" style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, textAlign: "center" }}>Your 7-day calendar will appear here</div>
              <div style={{ fontSize: 13, color: "rgba(125,211,252,0.2)", textAlign: "center" }}>Fill in the form and click Generate Content</div>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="gen-loading-state" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, color: "rgba(125,211,252,0.4)" }}>
              <div style={{ position: "relative" }}>
                <div className="loading-ring" style={{ width: 52, height: 52, border: "3px solid rgba(14,165,233,0.2)", borderTopColor: "#0ea5e9", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid rgba(14,165,233,0.15)", animation: "ringExpand 1.5s ease-out infinite" }} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.7)", textAlign: "center" }}>Generating your 7-day calendar...</div>
              <div style={{ fontSize: 13, textAlign: "center" }}>This takes about 15–20 seconds</div>
            </div>
          )}

          {/* ── RESULTS ── */}
          {days.length > 0 && (
            <div className="output-results">

              {/* Header */}
              <div className="gen-result-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div className="calendar-header-title" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>Your 7-Day Calendar</div>
                  <div style={{ fontSize: 12, color: "rgba(125,211,252,0.4)", marginTop: 2, wordBreak: "break-word" }}>
                    <span style={{ color: "rgba(125,211,252,0.85)", fontWeight: 500 }}>{niche}</span>
                    {" · "}{platform}{" · "}{tone}
                  </div>
                </div>
                <CopyBtn text={days.map(d => `--- Day ${d.day}: ${d.title} ---\n${d.caption}\n\n${d.hashtags.map(h => `#${h}`).join(" ")}`).join("\n\n")} />
              </div>

              {/* AI COVER IMAGE */}
              <div className="cover-img-card" style={{ borderRadius: 20, overflow: "hidden", background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", marginBottom: 20 }}>
                <div className="cover-img-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid rgba(14,165,233,0.1)", gap: 8, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "rgba(125,211,252,0.6)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    AI Cover Image
                    {imgLoading && <span style={{ fontWeight: 400, color: "rgba(125,211,252,0.3)", marginLeft: 4 }}>— Generating...</span>}
                    {coverImg && !imgLoading && (
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.25)", color: "#34d399", marginLeft: 4, animation: "tagPop 0.4s ease-out both" }}>✓ Generated</span>
                    )}
                  </div>
                  {coverImg && !imgLoading && (
                    <a href={coverImg} download="nichepost-cover.png" target="_blank" rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", color: "rgba(125,211,252,0.7)", textDecoration: "none", transition: "all 0.2s", flexShrink: 0 }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(14,165,233,0.18)"; (e.currentTarget as HTMLAnchorElement).style.color = "#7dd3fc"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(14,165,233,0.08)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(125,211,252,0.7)"; }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Download
                    </a>
                  )}
                </div>
                {imgLoading && (
                  <div style={{ height: 200, background: "rgba(14,165,233,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "relative" }}>
                      <div className="loading-ring" style={{ width: 32, height: 32, border: "3px solid rgba(14,165,233,0.2)", borderTopColor: "#0ea5e9", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      <div style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "1px solid rgba(14,165,233,0.12)", animation: "ringExpand 1.5s ease-out infinite" }} />
                    </div>
                  </div>
                )}
                {coverImg && !imgLoading && (
                  <img src={coverImg} alt="AI Cover" style={{ width: "100%", maxHeight: 260, objectFit: "cover", display: "block" }} />
                )}
                {!imgLoading && !coverImg && (
                  <div style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "rgba(125,211,252,0.2)" }}>Image unavailable</div>
                )}
              </div>

              {/* ── 7 DAY CARDS ── */}
              <div className="gen-days-grid">
                {days.map((d, i) => {
                  const fullText = `${d.caption}\n\n${d.hashtags.map(h => `#${h}`).join(" ")}`;
                  return (
                    <div key={d.day} className="day-result-card"
                      style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.12)", borderRadius: 18, overflow: "hidden", animationDelay: `${i * 0.07}s` }}
                    >
                      {/* Card top */}
                      <div style={{ padding: "14px 16px 12px", borderBottom: "1px solid rgba(14,165,233,0.08)" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                          <div className="day-num-badge" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(14,165,233,0.18)", border: "1px solid rgba(14,165,233,0.3)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontSize: 8, color: "rgba(125,211,252,0.65)", lineHeight: 1, fontWeight: 600 }}>{DAY_NAMES[i]}</span>
                            <span style={{ fontSize: 15, fontWeight: 800, color: "#7dd3fc", lineHeight: 1 }}>{d.day}</span>
                          </div>
                          <span className="platform-pill" style={{ fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 999, background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", color: "#93c5fd" }}>{platform}</span>
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#f8fafc", lineHeight: 1.4 }}>{d.title}</div>
                      </div>

                      {/* Card body */}
                      <div style={{ padding: "13px 16px" }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(125,211,252,0.35)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 6 }}>Caption</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 13, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>{d.caption}</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(125,211,252,0.35)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 7 }}>Hashtags</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                          {d.hashtags.slice(0, 6).map((h, hi) => (
                            <span key={h} className="hashtag-tag" style={{ fontSize: 10, padding: "3px 7px", borderRadius: 5, background: "rgba(14,165,233,0.12)", color: "#7dd3fc", fontWeight: 500, animationDelay: `${hi * 0.05}s` }}>#{h}</span>
                          ))}
                          {d.hashtags.length > 6 && (
                            <span style={{ fontSize: 10, padding: "3px 7px", borderRadius: 5, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}>+{d.hashtags.length - 6}</span>
                          )}
                        </div>
                      </div>

                      {/* Card footer */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(14,165,233,0.08)", padding: "10px 16px" }}>
                        <span style={{ fontSize: 10, color: "rgba(125,211,252,0.3)" }}>{d.caption.length} chars</span>
                        <CopyBtn text={fullText} />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}