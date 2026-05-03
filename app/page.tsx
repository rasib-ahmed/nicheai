"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [activePlatform, setActivePlatform] = useState("Instagram");
  const [activeTone, setActiveTone] = useState("Casual & Fun");
  const [yearly, setYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [payDone, setPayDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const platforms = ["Instagram", "TikTok", "LinkedIn", "Twitter"];
  const tones = ["Casual & Fun", "Professional", "Bold"];

  const FEATURES = [
    { cls: "f-card-purple", iconCls: "f-icon-purple", tagCls: "f-tag-purple", stroke: "#7dd3fc", tag: "AI Captions", title: "Captions that sound like you", desc: "Platform-native captions in your exact tone — casual, professional, bold, or inspirational. Every caption includes a call-to-action built in.", footer: "7 captions per calendar · all platforms" },
    { cls: "f-card-pink", iconCls: "f-icon-pink", tagCls: "f-tag-pink", stroke: "#93c5fd", tag: "Hashtag Generation", title: "10 hashtags. Every single post.", desc: "Stop recycling the same tags. Fresh niche-optimized hashtags for each day — matched to your platform and audience size for maximum reach.", footer: "70 unique hashtags per calendar" },
    { cls: "f-card-teal", iconCls: "f-icon-teal", tagCls: "f-tag-teal", stroke: "#5eead4", tag: "AI Cover Image", title: "One stunning image per calendar", desc: "Every calendar gets an AI-generated cover image tailored to your niche and tone. Download in one click — ready for posts, thumbnails, or banners.", footer: "1200 × 630px · instant download" },
    { cls: "f-card-amber", iconCls: "f-icon-amber", tagCls: "f-tag-amber", stroke: "#fcd34d", tag: "Multi-Platform", title: "Every platform, one tool", desc: "Instagram, TikTok, LinkedIn, Twitter, YouTube, Facebook — each platform gets content written natively for its format, limits, and audience behavior.", footer: "6 platforms supported" },
  ];

  const ICONS = [
    <path key="1" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
    <g key="2"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></g>,
    <g key="3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></g>,
    <g key="4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></g>,
  ];

  const PLANS = [
    { id: "free", name: "Free", mPrice: 0, yPrice: 0, desc: "Perfect for trying it out.", features: ["5 calendars per month", "7-day content plans", "Captions and hashtags", "Copy to clipboard"], highlight: false },
    { id: "creator", name: "Creator", mPrice: 19, yPrice: 13, desc: "For serious creators.", features: ["Unlimited calendars", "AI cover image per calendar", "All 6 platforms", "Priority generation", "Export to CSV"], highlight: true },
    { id: "agency", name: "Agency", mPrice: 49, yPrice: 34, desc: "For teams and client work.", features: ["Everything in Creator", "5 team members", "Brand voice presets", "Client workspaces", "API access"], highlight: false },
  ];

  const planData = PLANS.find(p => p.id === selectedPlan);
  const planName = planData?.name || "";
  const planPrice = selectedPlan === "free" ? 0 : yearly ? (planData?.yPrice || 0) : (planData?.mPrice || 0);
  const planOrigPrice = planData?.mPrice || 0;
  const totalPrice = yearly ? (planPrice * 12).toFixed(2) : planPrice.toFixed(2);
  const totalLabel = yearly ? `$${totalPrice}/yr` : `$${totalPrice}/mo`;

  return (
    <div className="hero-section">
      <div className="orb orb-purple" />
      <div className="orb orb-pink" />
      <div className="orb orb-amber" />
      <div className="grid-bg" />
      <div className="grid-fade" />

      {/* ── NAV ── */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <span className="nav-logo-text">NichePost<span> AI</span></span>
        </Link>

        <div className="nav-links">
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#pricing" className="nav-link">Pricing</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
        </div>

        <div className="nav-right">
          <Link href="/sign-in" className="nav-signin">Sign in</Link>
          <div className="nav-divider" />
          <Link href="/generate" className="nav-cta">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            Try Free →
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 6 }}
            aria-label="Menu"
          >
            <span style={{ width: 22, height: 2, background: "#7dd3fc", borderRadius: 2, display: "block", transition: "all 0.25s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ width: 22, height: 2, background: "#7dd3fc", borderRadius: 2, display: "block", transition: "all 0.25s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: "#7dd3fc", borderRadius: 2, display: "block", transition: "all 0.25s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 56, left: 0, right: 0, zIndex: 49, background: "rgba(5,13,26,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(14,165,233,0.15)", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[["Features","#features"],["Pricing","#pricing"],["Blog","/blog"],["Sign in","/sign-in"]].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(14,165,233,0.1)"; (e.currentTarget as HTMLAnchorElement).style.color = "#7dd3fc"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "none"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}
            >{label}</Link>
          ))}
          <Link href="/generate" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8, padding: "13px 16px", borderRadius: 12, fontSize: 15, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#0ea5e9,#2563eb)", textDecoration: "none", textAlign: "center", boxShadow: "0 4px 14px rgba(14,165,233,0.35)" }}>
            Generate Free Calendar →
          </Link>
        </div>
      )}

      <div style={{ height: 64 }} />

      {/* ── HERO ── */}
      <div className="hero-body">
        <div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span className="hero-badge-text">Powered by AI · Free to start</span>
          </div>
          <h1 className="hero-headline">
            A full week<br />of content,{" "}
            <span className="hero-headline-gradient">written for you.</span>
          </h1>
          <p className="hero-sub">
            Enter your niche, pick your platform, choose your tone — and get 7 days of captions, hashtags, and an AI cover image ready to post.
          </p>
          <div className="hero-ctas">
            <Link href="/generate" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              Generate My Free Calendar
            </Link>
            <Link href="#features" className="btn-secondary">See how it works</Link>
          </div>
          <div className="social-proof">
            <div className="avatars">
              {[["M","#0ea5e9"],["J","#2563eb"],["S","#f59e0b"],["A","#10b981"]].map(([l,bg]) => (
                <div key={l} className="avatar" style={{ background: bg }}>{l}</div>
              ))}
            </div>
            <div className="stars">{[...Array(5)].map((_,i) => <span key={i} className="star">★</span>)}</div>
            <span className="proof-text">Trusted by <strong>2,400+</strong> creators · No card required</span>
          </div>
        </div>

        {/* PRODUCT CARD */}
        <div className="card-wrap">
          <div className="card-glow" />
          <div className="product-card">
            <div className="window-bar">
              <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
              <div className="url-bar">nichepost.ai/generate</div>
            </div>
            <div className="card-body">
              <div>
                <div className="field-label">Your Niche</div>
                <div className="field-input" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  Vegan meal prep for busy parents
                </div>
              </div>
              <div>
                <div className="field-label">Platform</div>
                <div className="pill-row">
                  {platforms.map(p => (
                    <span key={p} onClick={() => setActivePlatform(p)}
                      className={`pill ${activePlatform === p ? "pill-active-purple" : ""}`}
                      style={{ cursor: "pointer" }}>{p}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="field-label">Tone</div>
                <div className="pill-row">
                  {tones.map(t => (
                    <span key={t} onClick={() => setActiveTone(t)}
                      className={`pill ${activeTone === t ? "pill-active-pink" : ""}`}
                      style={{ cursor: "pointer" }}>{t}</span>
                  ))}
                </div>
              </div>
              <Link href="/generate" className="gen-btn" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Generate 7-Day Calendar
              </Link>
              <div className="output-section">
                <div className="output-header">
                  <span className="output-label">Your calendar · Day 1–4 of 7</span>
                  <span className="output-status">✓ Generated</span>
                </div>
                <div className="day-grid">
                  {[{day:1,tags:["#vegan","#mealprep"]},{day:2,tags:["#healthy","#plantbased"]},{day:3,tags:["#foodie","#wellness"]},{day:4,tags:["#recipes","#cleaneats"]}].map(({day,tags}) => (
                    <div key={day} className="day-card">
                      <div className="day-badge">Day {day}</div>
                      <div className="day-lines">
                        <div className="day-line" style={{width:"80%"}} />
                        <div className="day-line" style={{width:"60%"}} />
                        <div className="day-line" style={{width:"75%"}} />
                      </div>
                      <div className="tag-row">{tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="floating-badge badge-ai">✦ AI-powered</div>
          <div className="floating-badge badge-ready">✓ Ready to post</div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div id="features" className="features-section">
        <div className="features-header">
          <div className="features-eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            Everything you need
          </div>
          <h2 className="features-title">Built for creators who want to{" "}<span className="features-title-gradient">grow faster</span></h2>
          <p className="features-sub">Four powerful AI tools in one place. No more switching between apps or staring at a blank screen.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Link key={i} href="/generate" className={`f-card ${f.cls}`} style={{ textDecoration: "none", display: "block", cursor: "pointer" }}>
              <div className={`f-icon-wrap ${f.iconCls}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={f.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[i]}
                </svg>
              </div>
              <span className={`f-tag ${f.tagCls}`}>{f.tag}</span>
              <h3 className="f-card-title">{f.title}</h3>
              <p className="f-card-desc">{f.desc}</p>
              <div className="f-card-footer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                {f.footer}
              </div>
            </Link>
          ))}
        </div>
        <div className="features-stats">
          <div className="f-stat-box"><div className="f-stat-num">7</div><div className="f-stat-label">days of content</div></div>
          <div className="f-stat-box"><div className="f-stat-num">20s</div><div className="f-stat-label">to generate</div></div>
          <div className="f-stat-box"><div className="f-stat-num">6</div><div className="f-stat-label">platforms supported</div></div>
        </div>
      </div>

      {/* ── PRICING ── */}
      <div id="pricing" className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title">Simple pricing</h2>
        <p className="section-sub">Start free. Upgrade when you are ready.</p>

        {/* Toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 999, padding: "6px 8px", flexWrap: "wrap", justifyContent: "center" }}>
            <span onClick={() => setYearly(false)} style={{ fontSize: 13, fontWeight: 500, color: yearly ? "rgba(255,255,255,0.45)" : "#f8fafc", padding: "0 8px", cursor: "pointer", transition: "color 0.2s" }}>Monthly</span>
            <div onClick={() => setYearly(!yearly)} style={{ width: 44, height: 24, background: yearly ? "linear-gradient(135deg,#0ea5e9,#2563eb)" : "rgba(14,165,233,0.3)", border: "1px solid rgba(14,165,233,0.4)", borderRadius: 999, position: "relative", cursor: "pointer", transition: "background 0.3s", flexShrink: 0 }}>
              <div style={{ width: 18, height: 18, background: "#fff", borderRadius: "50%", position: "absolute", top: 2, left: 2, transition: "transform 0.25s", transform: yearly ? "translateX(20px)" : "translateX(0)" }} />
            </div>
            <span onClick={() => setYearly(true)} style={{ fontSize: 13, fontWeight: 500, color: yearly ? "#f8fafc" : "rgba(255,255,255,0.45)", padding: "0 8px", cursor: "pointer", transition: "color 0.2s" }}>Yearly</span>
            <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)", color: "#34d399", opacity: yearly ? 1 : 0.4, transition: "opacity 0.2s" }}>Save 30%</span>
          </div>
        </div>

        {/* Plan cards */}
        <div className="pricing-grid">
          {PLANS.map(p => {
            const price = p.id === "free" ? 0 : yearly ? p.yPrice : p.mPrice;
            const isSelected = selectedPlan === p.id;
            return (
              <div key={p.id}
                onClick={() => { setSelectedPlan(p.id); setPayDone(false); if (p.id !== "free") setShowCheckout(true); else setShowCheckout(false); }}
                style={{ padding: 28, borderRadius: 20, cursor: "pointer", position: "relative", transition: "all 0.25s",
                  background: isSelected ? "rgba(14,165,233,0.1)" : p.highlight ? "linear-gradient(135deg,rgba(14,165,233,0.18),rgba(37,99,235,0.1))" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isSelected ? "rgba(14,165,233,0.6)" : p.highlight ? "rgba(14,165,233,0.4)" : "rgba(14,165,233,0.12)"}`,
                  transform: isSelected ? "translateY(-4px)" : "translateY(0)",
                }}>
                {p.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", fontSize: 10, fontWeight: 700, padding: "4px 14px", borderRadius: 999, background: "linear-gradient(135deg,#0ea5e9,#2563eb)", color: "#fff", whiteSpace: "nowrap" }}>⚡ Most Popular</div>
                )}
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 2 }}>
                  ${price}<span style={{ fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.4)" }}>{p.id === "free" ? "/forever" : "/mo"}</span>
                </div>
                {p.id !== "free" && yearly && <div style={{ fontSize: 11, fontWeight: 600, color: "#34d399", marginBottom: 2 }}>Billed ${(p.yPrice * 12)} per year</div>}
                {p.id !== "free" && yearly && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "line-through", marginBottom: 6 }}>${p.mPrice}/mo billed monthly</div>}
                {!(p.id !== "free" && yearly) && <div style={{ height: 24 }} />}
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20, lineHeight: 1.5 }}>{p.desc}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginBottom: 24 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                      <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ width: "100%", padding: "12px", borderRadius: 12, fontSize: 14, fontWeight: 700, textAlign: "center", transition: "all 0.2s",
                  color: isSelected ? "#34d399" : "#fff",
                  background: isSelected ? "rgba(52,211,153,0.12)" : p.highlight ? "linear-gradient(135deg,#0ea5e9,#2563eb)" : "rgba(14,165,233,0.08)",
                  border: `1px solid ${isSelected ? "rgba(52,211,153,0.35)" : p.highlight ? "transparent" : "rgba(14,165,233,0.2)"}`,
                }}>
                  {isSelected ? "✓ Selected" : p.id === "free" ? "Get Started Free" : p.id === "creator" ? "Start 7-Day Trial" : "Get Started"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Checkout */}
        {showCheckout && selectedPlan && selectedPlan !== "free" && (
          <div style={{ marginTop: 28, background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 20, padding: "28px 20px" }}>
            {!payDone ? (
              <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>Complete your {planName} order</div>
                  <span onClick={() => { setShowCheckout(false); setSelectedPlan(null); }} style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", cursor: "pointer" }}>✕ Cancel</span>
                </div>
                <div style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 12, padding: 16, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>
                    <span>{planName} Plan {yearly ? "(Annual)" : "(Monthly)"}</span><span>${planOrigPrice}/mo</span>
                  </div>
                  {yearly && <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#34d399", marginBottom: 8 }}><span>Annual discount (30%)</span><span>-${(planOrigPrice - planPrice) * 12}</span></div>}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 700, color: "#f8fafc", borderTop: "1px solid rgba(14,165,233,0.15)", paddingTop: 10, marginTop: 4 }}>
                    <span>Total today</span><span>{totalLabel}</span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: "Email address", placeholder: "you@example.com", type: "email", full: true },
                    { label: "Card number", placeholder: "1234 5678 9012 3456", type: "text", full: true },
                    { label: "Expiry", placeholder: "MM / YY", type: "text", full: false },
                    { label: "CVC", placeholder: "123", type: "text", full: false },
                    { label: "Name on card", placeholder: "John Smith", type: "text", full: true },
                  ].map((f, i) => (
                    <div key={i} style={{ gridColumn: f.full ? "1 / -1" : "auto" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(125,211,252,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{f.label}</div>
                      <input type={f.type} placeholder={f.placeholder}
                        style={{ width: "100%", padding: "11px 14px", borderRadius: 12, fontSize: 14, color: "#f8fafc", background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)", outline: "none", fontFamily: "inherit" }}
                        onFocus={e => { e.target.style.borderColor = "rgba(14,165,233,0.6)"; e.target.style.background = "rgba(14,165,233,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(14,165,233,0.2)"; e.target.style.background = "rgba(14,165,233,0.06)"; }}
                      />
                    </div>
                  ))}
                </div>
                <button onClick={() => setPayDone(true)}
                  style={{ width: "100%", padding: 14, borderRadius: 14, fontSize: 15, fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#0ea5e9,#2563eb)", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 6px 20px rgba(14,165,233,0.35)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  Pay {totalLabel}
                </button>
                <div style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Secured by 256-bit SSL encryption
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(52,211,153,0.15)", border: "2px solid rgba(52,211,153,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.02em" }}>Payment successful!</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>
                  Welcome to <span style={{ color: "#7dd3fc", fontWeight: 600 }}>{planName} Plan</span>. Check your email for your receipt.
                </div>
                <button onClick={() => { setShowCheckout(false); setSelectedPlan(null); setPayDone(false); }}
                  style={{ padding: "10px 24px", borderRadius: 10, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", color: "#f8fafc", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  Back to Plans
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <span className="nav-logo-text">NichePost<span> AI</span></span>
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} NichePost AI · Powered by AI</span>
        <div className="footer-links">
          <Link href="/blog" className="footer-link">Blog</Link>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .card-wrap { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-hamburger { display: flex !important; }
          .nav-signin, .nav-divider, .nav-cta { display: none !important; }
          .nav-links { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-ctas { flex-direction: column !important; }
          .btn-primary, .btn-secondary { width: 100% !important; justify-content: center !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .checkout-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}