"use client";
import { useState } from "react";
import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import Generator from "@/components/Generator";
import Features  from "@/components/Features";
import Blog      from "@/components/Blog";
import Footer    from "@/components/Footer";

const STATS = [
  { n: "50K+", l: "Creators" },
  { n: "2.4M", l: "Posts Generated" },
  { n: "5hrs", l: "Saved Per Week" },
  { n: "4.9★", l: "Average Rating" },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <div style={{
      background: "var(--bg)",
      color: "var(--text)",
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden",
      fontFamily: "var(--font-body)",
      position: "relative",
    }}>

      {/* BG GRADIENT ORBS */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          top: -200, right: -100,
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          bottom: 100, left: -100,
        }} />
        <div style={{
          position: "fixed", inset: 0,
          background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(59,130,246,0.008) 2px,rgba(59,130,246,0.008) 4px)",
        }} />
      </div>

      {/* NAVBAR */}
      <Navbar dark={dark} onToggle={() => setDark(!dark)} />

      {/* HERO */}
      <Hero dark={dark} />

      {/* STATS BAR */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid var(--bdr)",
        borderBottom: "1px solid var(--bdr)",
        position: "relative", zIndex: 1,
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "center",
          alignItems: "center", flexWrap: "wrap",
          gap: "clamp(24px, 5vw, 80px)",
          padding: "24px 40px",
        }}>
          {STATS.map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 800, color: "#fff",
                lineHeight: 1.2,
                fontFamily: "var(--font-body)",
              }}>
                {s.n}
              </div>
              <div style={{
                fontSize: 13, color: "var(--text2)",
                marginTop: 3, whiteSpace: "nowrap",
                fontFamily: "var(--font-body)",
              }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTIONS */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Generator dark={dark} />
        <Features  dark={dark} />
        <Blog      dark={dark} />
        <Footer    dark={dark} />
      </div>
    </div>
  );
}