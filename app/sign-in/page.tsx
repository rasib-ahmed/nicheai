"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#050d1a", color: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", display: "flex", flexDirection: "column" }}>

      <style>{`
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes scanH { 0%{transform:translateX(-100%);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateX(100%);opacity:0} }
        @keyframes orbFloat1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,-30px) scale(1.08)} 66%{transform:translate(-20px,20px) scale(0.95)} }
        @keyframes orbFloat2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-35px,25px) scale(1.05)} 66%{transform:translate(25px,-20px) scale(0.97)} }
        @keyframes morphGlow { 0%,100%{box-shadow:0 0 40px rgba(14,165,233,0.2),0 0 80px rgba(14,165,233,0.06)} 33%{box-shadow:0 0 60px rgba(37,99,235,0.3),0 0 120px rgba(37,99,235,0.1)} 66%{box-shadow:0 0 50px rgba(125,211,252,0.25),0 0 100px rgba(125,211,252,0.08)} }
        @keyframes borderGlow { 0%,100%{border-color:rgba(14,165,233,0.25)} 50%{border-color:rgba(125,211,252,0.6)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes neonText { 0%,100%{text-shadow:0 0 10px rgba(125,211,252,0.8),0 0 20px rgba(125,211,252,0.4)} 50%{text-shadow:0 0 20px rgba(147,197,253,0.9),0 0 40px rgba(147,197,253,0.5)} }
        @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes ringExpand { 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(2.4);opacity:0} }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes checkPop { 0%{opacity:0;transform:scale(0.5)} 70%{transform:scale(1.15)} 100%{opacity:1;transform:scale(1)} }
        @keyframes gridPulse { 0%,100%{opacity:0.03} 50%{opacity:0.07} }

        ::placeholder { color: rgba(125,211,252,0.25) !important; }
        select option { background: #050d1a; color: #f8fafc; }

        .signin-input {
          width: 100%;
          padding: 13px 14px 13px 44px;
          border-radius: 14px;
          font-size: 14px;
          color: #f8fafc;
          background: rgba(14,165,233,0.06);
          border: 1px solid rgba(14,165,233,0.2);
          outline: none;
          font-family: inherit;
          transition: all 0.25s;
        }
        .signin-input:focus {
          border-color: rgba(14,165,233,0.6) !important;
          background: rgba(14,165,233,0.1) !important;
          box-shadow: 0 0 0 3px rgba(14,165,233,0.12), 0 0 20px rgba(14,165,233,0.08) !important;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          border: none;
          cursor: pointer;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 6px 24px rgba(14,165,233,0.35);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s;
        }
        .submit-btn:hover::before { left: 100%; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(14,165,233,0.5) !important; }
        .submit-btn:active { transform: translateY(1px) scale(0.99); }

        .social-btn {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          background: rgba(14,165,233,0.06);
          border: 1px solid rgba(14,165,233,0.18);
          cursor: pointer;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
        }
        .social-btn:hover { background: rgba(14,165,233,0.12); border-color: rgba(14,165,233,0.4); color: #7dd3fc; transform: translateY(-1px); }

        .mode-tab {
          flex: 1;
          padding: 9px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.25s ease;
        }

        .nav-back { transition: all 0.2s ease; }
        .nav-back:hover { color: #7dd3fc !important; transform: translateX(-3px); }

        .divider-line { flex: 1; height: 1px; background: rgba(14,165,233,0.12); }
        .divider-text { font-size: 11px; color: rgba(125,211,252,0.35); font-weight: 600; padding: 0 12px; white-space: nowrap; }

        .forgot-link { font-size: 11px; color: rgba(125,211,252,0.4); text-decoration: none; transition: color 0.2s; }
        .forgot-link:hover { color: #7dd3fc; }

        .feature-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(14,165,233,0.06);
          border: 1px solid rgba(14,165,233,0.12);
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          transition: all 0.2s;
        }
        .feature-chip:hover { background: rgba(14,165,233,0.1); border-color: rgba(14,165,233,0.25); color: rgba(255,255,255,0.75); transform: translateX(4px); }

        /* ── RESPONSIVE ── */
        .signin-nav { padding: 0 48px; }
        .signin-footer { padding: 20px 48px; }
        .signin-grid {
          width: 100%;
          max-width: 960px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .signin-left { display: block; }

        @media (max-width: 820px) {
          .signin-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            gap: 0 !important;
          }
          .signin-left { display: none !important; }
          .signin-nav { padding: 0 24px !important; }
          .signin-footer { padding: 16px 24px !important; flex-direction: column !important; gap: 10px !important; text-align: center !important; }
          .signin-footer-links { justify-content: center !important; }
        }

        @media (max-width: 480px) {
          .signin-nav { padding: 0 16px !important; }
          .signin-footer { padding: 14px 16px !important; }
          .signin-form-body { padding: 20px 18px 24px !important; }
          .signin-tabs { padding: 16px 18px 0 !important; }
          .social-grid { grid-template-columns: 1fr !important; }
          .signin-grid { max-width: 100% !important; padding: 0 !important; }
          .signin-main { padding: 32px 16px !important; }
        }

        @media (max-width: 360px) {
          .mode-tab { font-size: 12px; padding: 8px 6px; }
          .submit-btn { font-size: 14px; padding: 13px; }
        }
      `}</style>

      {/* BACKGROUND */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", width: 700, height: 700, top: -300, left: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 65%)", animation: "orbFloat1 14s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 500, height: 500, top: -100, right: -150, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)", animation: "orbFloat2 18s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 400, height: 400, bottom: -100, left: "40%", borderRadius: "50%", background: "radial-gradient(circle, rgba(125,211,252,0.08) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)", backgroundSize: "52px 52px", animation: "gridPulse 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, #050d1a 100%)" }} />
      </div>

      {/* NAV */}
      <div className="signin-nav" style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, borderBottom: "1px solid rgba(14,165,233,0.1)", background: "rgba(5,13,26,0.88)", backdropFilter: "blur(20px)" }}>
        <Link href="/" className="nav-back" style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", display: "flex", alignItems: "center", gap: 7, textDecoration: "none", fontWeight: 500, flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Home
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ position: "relative", width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(14,165,233,0.4)", animation: "breathe 4s ease-in-out infinite", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <div style={{ position: "absolute", inset: -3, borderRadius: "50%", border: "1px solid rgba(14,165,233,0.4)", animation: "ringExpand 2.5s ease-out infinite" }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>NichePost <span style={{ color: "#7dd3fc", animation: "neonText 4s ease-in-out infinite" }}>AI</span></span>
        </div>
        <div style={{ width: 80, flexShrink: 0 }} />
      </div>

      {/* MAIN */}
      <div className="signin-main" style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
        <div className="signin-grid">

          {/* LEFT — branding */}
          <div className="signin-left" style={{ animation: "fadeUp 0.8s ease-out 0.1s both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 999, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.3)", fontSize: 11, fontWeight: 700, color: "#7dd3fc", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7dd3fc", animation: "breathe 2s ease-in-out infinite" }} />
              Free to start
            </div>
            <h1 style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Your content,<br />
              <span style={{ background: "linear-gradient(90deg,#7dd3fc,#93c5fd,#38bdf8)", backgroundSize: "300% 300%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "gradShift 4s ease infinite" }}>
                on autopilot.
              </span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 36, maxWidth: 360 }}>
              Join 2,400+ creators generating 7-day content calendars in 20 seconds. No more blank screen, no more guessing.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
              {[
                { icon: "⚡", text: "7-day content calendar in 20 seconds" },
                { icon: "✦", text: "AI captions, hashtags & cover image" },
                { icon: "◈", text: "Instagram, TikTok, LinkedIn & more" },
                { icon: "✓", text: "No credit card required to start" },
              ].map((f, i) => (
                <div key={i} className="feature-chip">
                  <span style={{ fontSize: 14, color: "#7dd3fc", flexShrink: 0 }}>{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ display: "flex" }}>
                {[["M","#0ea5e9"],["J","#2563eb"],["S","#f59e0b"],["A","#10b981"]].map(([l,bg],i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: bg, border: "2px solid #050d1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", marginLeft: i === 0 ? 0 : -8 }}>{l}</div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
                  {[...Array(5)].map((_,i) => <span key={i} style={{ color: "#fbbf24", fontSize: 12 }}>★</span>)}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Trusted by <strong style={{ color: "rgba(255,255,255,0.6)" }}>2,400+</strong> creators</div>
              </div>
            </div>
          </div>

          {/* RIGHT — form card */}
          <div style={{ animation: "fadeUp 0.9s ease-out 0.2s both", width: "100%" }}>
            {!done ? (
              <div style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.18)", borderRadius: 24, overflow: "hidden", animation: "morphGlow 6s ease-in-out infinite" }}>

                {/* Scan line */}
                <div style={{ position: "relative", height: 2, overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: "linear-gradient(90deg,transparent,rgba(125,211,252,0.7),transparent)", animation: "scanH 4s ease-in-out infinite" }} />
                </div>

                {/* Mode tabs */}
                <div className="signin-tabs" style={{ padding: "20px 24px 0" }}>
                  <div style={{ display: "flex", background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)", borderRadius: 12, padding: 4, gap: 4 }}>
                    {(["signin","signup"] as const).map(m => (
                      <button key={m} className="mode-tab"
                        onClick={() => { setMode(m); setDone(false); }}
                        style={{ background: mode === m ? "linear-gradient(135deg,#0ea5e9,#2563eb)" : "transparent", color: mode === m ? "#fff" : "rgba(125,211,252,0.5)", boxShadow: mode === m ? "0 4px 12px rgba(14,165,233,0.35)" : "none" }}>
                        {m === "signin" ? "Sign In" : "Create Account"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="signin-form-body" style={{ padding: "24px 24px 28px" }}>

                  {/* Header */}
                  <div style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>
                      {mode === "signin" ? "Welcome back 👋" : "Start for free today"}
                    </h2>
                    <p style={{ fontSize: 13, color: "rgba(125,211,252,0.45)", lineHeight: 1.4 }}>
                      {mode === "signin" ? "Sign in to access your content calendars." : "No credit card required. Generate your first calendar in 20s."}
                    </p>
                  </div>

                  {/* Social buttons */}
                  <div className="social-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                    <button className="social-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                      Google
                    </button>
                    <button className="social-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                      GitHub
                    </button>
                  </div>

                  {/* Divider */}
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                    <div className="divider-line" />
                    <span className="divider-text">or continue with email</span>
                    <div className="divider-line" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                    {mode === "signup" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: "rgba(125,211,252,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Full Name</label>
                        <div style={{ position: "relative" }}>
                          <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          </div>
                          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" required className="signin-input" />
                        </div>
                      </div>
                    )}

                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, color: "rgba(125,211,252,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email Address</label>
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </div>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required className="signin-input" />
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: "rgba(125,211,252,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Password</label>
                        {mode === "signin" && <a href="#" className="forgot-link">Forgot password?</a>}
                      </div>
                      <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </div>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={mode === "signin" ? "Your password" : "Create a password"} required className="signin-input" />
                      </div>
                    </div>

                    {mode === "signup" && (
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 14px", borderRadius: 10, background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)" }}>
                        <div style={{ width: 16, height: 16, borderRadius: 4, border: "1px solid rgba(14,165,233,0.4)", background: "rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg>
                        </div>
                        <span style={{ fontSize: 11, color: "rgba(125,211,252,0.45)", lineHeight: 1.5 }}>
                          I agree to the <a href="/terms" style={{ color: "#7dd3fc", textDecoration: "none" }}>Terms</a> and <a href="/privacy" style={{ color: "#7dd3fc", textDecoration: "none" }}>Privacy Policy</a>
                        </span>
                      </div>
                    )}

                    <button type="submit" className="submit-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      {mode === "signin" ? "Sign In" : "Create Free Account"}
                    </button>
                  </form>

                  {/* Switch mode */}
                  <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "rgba(125,211,252,0.35)" }}>
                    {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                      style={{ color: "#7dd3fc", fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLSpanElement).style.opacity = "0.7"}
                      onMouseLeave={e => (e.currentTarget as HTMLSpanElement).style.opacity = "1"}
                    >
                      {mode === "signin" ? "Create account" : "Sign in"}
                    </span>
                  </div>
                </div>
              </div>

            ) : (
              /* SUCCESS */
              <div style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.18)", borderRadius: 24, padding: "48px 28px", textAlign: "center", animation: "morphGlow 6s ease-in-out infinite" }}>
                <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 24px" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(52,211,153,0.15)", border: "2px solid rgba(52,211,153,0.4)", display: "flex", alignItems: "center", justifyContent: "center", animation: "checkPop 0.5s ease-out both" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "1px solid rgba(52,211,153,0.2)", animation: "ringExpand 1.5s ease-out infinite" }} />
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
                  {mode === "signin" ? "Welcome back! 🎉" : "Account created! 🚀"}
                </h2>
                <p style={{ fontSize: 14, color: "rgba(125,211,252,0.45)", marginBottom: 28, lineHeight: 1.6 }}>
                  {mode === "signin" ? "You're signed in. Let's create some content!" : "Your free account is ready. Generate your first calendar!"}
                </p>
                <Link href="/generate"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 13, fontSize: 14, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#0ea5e9,#2563eb)", textDecoration: "none", boxShadow: "0 6px 20px rgba(14,165,233,0.4)", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 30px rgba(14,165,233,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(14,165,233,0.4)"; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  Generate My Free Calendar
                </Link>
                <div style={{ marginTop: 16, fontSize: 12, color: "rgba(125,211,252,0.25)" }}>
                  or <Link href="/" style={{ color: "#7dd3fc", textDecoration: "none" }}>go back home</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="signin-footer" style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(14,165,233,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} NichePost AI</span>
        <div className="signin-footer-links" style={{ display: "flex", gap: 20 }}>
          {[["Privacy","/privacy"],["Terms","/terms"],["Blog","/blog"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#7dd3fc"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)"}
            >{label}</Link>
          ))}
        </div>
      </div>

    </div>
  );
}