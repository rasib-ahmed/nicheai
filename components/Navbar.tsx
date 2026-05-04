"use client";
import { useState, useEffect } from "react";

interface NavbarProps { dark: boolean; onToggle: () => void; }

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const navItems = [
    { label: "Generator", id: "generator" },
    { label: "Features",  id: "features"  },
    { label: "Blog",      id: "blog"       },
  ];

  return (
    <>
      <nav style={{
        background: scrolled ? "rgba(8,12,20,0.98)" : "rgba(8,12,20,0.85)",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "1px solid rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000, width: "100%",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        animation: "navSlideDown 0.5s ease both",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "0 40px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", height: 64,
        }}>

          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 17, fontWeight: 800, color: "#fff",
              boxShadow: "0 4px 14px rgba(59,130,246,0.45)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(59,130,246,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(59,130,246,0.45)"; }}>
              ⚡
            </div>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: 19, fontWeight: 800,
              color: "#fff", letterSpacing: "-0.3px",
            }}>
              NichePost{" "}
              <span style={{
                background: "linear-gradient(135deg, #3b82f6, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>AI</span>
            </span>
          </div>

          {/* CENTER NAV LINKS */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navItems.map((item, i) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                style={{
                  background: "none", border: "none",
                  fontSize: 15, fontWeight: 500,
                  color: "#8896b3", cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  transition: "all 0.2s",
                  padding: "6px 16px",
                  borderRadius: 8,
                  animation: `navItemFade 0.5s ${0.1 + i * 0.08}s ease both`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "#8896b3";
                  e.currentTarget.style.background = "none";
                }}>
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT — Try Free only */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => scrollTo("generator")}
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                color: "#fff", border: "none",
                borderRadius: 10, padding: "9px 22px",
                fontSize: 14, fontWeight: 700,
                cursor: "pointer", fontFamily: "var(--font-body)",
                transition: "all 0.2s",
                boxShadow: "0 4px 14px rgba(59,130,246,0.35)",
                display: "flex", alignItems: "center", gap: 6,
                animation: "navItemFade 0.5s 0.35s ease both",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,130,246,0.55)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(59,130,246,0.35)";
              }}>
              ⚡ Try Free →
            </button>

            {/* HAMBURGER — mobile */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn"
              style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6 }}>
              <div style={{ width: 22, height: 2, background: "#fff", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <div style={{ width: 22, height: 2, background: "#fff", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
              <div style={{ width: 22, height: 2, background: "#fff", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div style={{
            background: "#0d1117",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
            display: "flex", flexDirection: "column", gap: 4,
            animation: "fadeUp 0.3s ease both",
          }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                style={{
                  background: "none", border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontSize: 16, fontWeight: 600,
                  color: "#fff", cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  padding: "14px 0", textAlign: "left",
                }}>
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo("generator")}
              style={{
                marginTop: 12,
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                color: "#fff", border: "none", borderRadius: 10,
                padding: "12px", fontSize: 15, fontWeight: 700,
                cursor: "pointer", fontFamily: "var(--font-body)",
              }}>
              ⚡ Try Free →
            </button>
          </div>
        )}
      </nav>

      {/* NAV HEIGHT SPACER — fixed nav ki wajah se content neeche shift */}
      <div style={{ height: 64 }} />

      <style>{`
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes navItemFade {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          nav > div { padding: 0 16px !important; }
        }
      `}</style>
    </>
  );
}