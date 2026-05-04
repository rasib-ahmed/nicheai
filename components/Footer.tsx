"use client";

export default function Footer({ dark }: { dark: boolean }) {
  return (
    <footer style={{
      background: "#080c14",
      borderTop: "1px solid var(--bdr)",
      padding: "56px 40px 32px",
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>

          {/* BRAND */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: "#fff",
              }}>⚡</div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 18, fontWeight: 800, color: "#fff" }}>
                NichePost AI
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
              The fastest way to fill your content calendar with posts that actually perform.
            </p>
          </div>

          {/* LINKS */}
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { title: "PRODUCT",   links: ["Generator","Features","Pricing"] },
              { title: "RESOURCES", links: ["Blog","Help Center","API Docs"] },
              { title: "COMPANY",   links: ["About","Privacy","Terms"] },
            ].map(col => (
              <div key={col.title}>
                <h5 style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", marginBottom: 14, letterSpacing: "0.08em", fontFamily: "var(--font-body)" }}>{col.title}</h5>
                {col.links.map(l => (
                  <a key={l} href="#"
                    style={{ display: "block", fontSize: 14, color: "var(--text2)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s", fontFamily: "var(--font-body)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text2)"}>
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--bdr)", paddingTop: 24,
          display: "flex", justifyContent: "space-between",
          fontSize: 13, color: "var(--text3)",
          flexWrap: "wrap", gap: 8,
          fontFamily: "var(--font-body)",
        }}>
          <span>© 2026 NichePost AI. All rights reserved.</span>
          <span>Made with ♥ for creators everywhere</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) { footer { padding: 40px 16px 24px !important; } }
      `}</style>
    </footer>
  );
}