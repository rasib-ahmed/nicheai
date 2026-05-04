"use client";
import { useState } from "react";

interface DayPost { day: string; caption: string; hashtags: string[]; }

const DAYS     = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const DAYNUM   = [1,2,3,4,5,6,7];
const DAYSHORT = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const DAY_TITLES = [
  "Monday Motivation","Tuesday Tips","Wednesday Workout",
  "Thursday Thoughts","Friday Vibes","Saturday Strategy","Sunday Wrap-up"
];

const FALLBACK_CAPS = [
  "Starting the week strong! Consistency is your superpower. Every small step today builds massive results tomorrow.",
  "Hot take: progress beats perfection every single time. The messy middle is where the real magic happens.",
  "Mid-week check-in! Creators winning in your niche simply started and kept going. Today is your day.",
  "Thursday reminder: the audience you want is waiting for exactly what you create. Do not hold back!",
  "Friday energy! End the week with your strongest post yet. Your future self will thank you.",
  "Weekend creators unite! This is when your audience has the most time to engage and share.",
  "Sunday wrap-up! Celebrate how far you came this week. Even the smallest win deserves recognition.",
];
const FALLBACK_TAGS = [
  ["#mondaymotivation","#contentcreator","#consistency","#growyouraudience"],
  ["#tuesdaytips","#creatoreconomy","#growthmindset","#organicgrowth"],
  ["#wednesdaywisdom","#contentmarketing","#socialmediatips","#createcontent"],
  ["#thursdaythoughts","#onlinebusiness","#contentideas","#personalbranding"],
  ["#fridayvibes","#socialmedia","#buildyourbrand","#audiencegrowth"],
  ["#saturdayvibes","#weekendcontent","#creativecommunity","#contentgrowth"],
  ["#sundayinspo","#weeklyrecap","#contentplanning","#creator101"],
];

const FALLBACK_DATA: DayPost[] = DAYS.map((d, i) => ({
  day: d, caption: FALLBACK_CAPS[i], hashtags: FALLBACK_TAGS[i],
}));

function downloadDoc(text: string, title: string) {
  const html = `<html><body style="font-family:Calibri,sans-serif;font-size:12pt;line-height:1.8;margin:40px;"><h2 style="color:#3b82f6;">${title}</h2><p>${text.replace(/\n/g,"<br/>")}</p></body></html>`;
  const blob = new Blob(["\ufeff"+html],{type:"application/msword"});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href=url; a.download=title.replace(/\s+/g,"_")+".doc";
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

export default function Generator({ dark }: { dark: boolean }) {
  const [niche,      setNiche]      = useState("");
  const [platform,   setPlatform]   = useState("");
  const [tone,       setTone]       = useState("");
  const [loading,    setLoading]    = useState(false);
  const [calendar,   setCalendar]   = useState<DayPost[]|null>(null);
  const [coverImage, setCoverImage] = useState<string|null>(null);
  const [imgLoaded,  setImgLoaded]  = useState(false);
  const [copiedIdx,  setCopiedIdx]  = useState<number|null>(null);

  const isReady = niche.trim() !== "" && platform !== "" && tone !== "";

  async function generate() {
    if (!isReady) { alert("Please fill all three fields!"); return; }
    setLoading(true);
    setCalendar(null);
    setCoverImage(null);
    setImgLoaded(false);

    try {
      const res  = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ niche, platform, tone }),
      });
      const data = await res.json();

      if (data.calendar && Array.isArray(data.calendar) && data.calendar.length === 7) {
        setCalendar(data.calendar);
      } else {
        setCalendar(FALLBACK_DATA);
      }

      if (data.imageUrl) {
        setCoverImage(data.imageUrl);
      }

    } catch {
      setCalendar(FALLBACK_DATA);
    } finally {
      setLoading(false);
    }
  }

  function copyPost(idx: number, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    });
  }

  function copyAll() {
    if (!calendar) return;
    const all = calendar.map((item, i) =>
      `=== ${DAYS[i].toUpperCase()} ===\n${item.caption}\n\n${item.hashtags.join(" ")}`
    ).join("\n\n---\n\n");
    navigator.clipboard.writeText(all);
    alert("All 7 days copied!");
  }

  const inputStyle: React.CSSProperties = {
    padding: "11px 14px",
    borderRadius: 10,
    border: "1px solid rgba(59,130,246,0.2)",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "#e2eeff",
    background: "#111827",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="generator" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>

      {/* HEADING */}
      <div className="anim-2">
        <p style={{
          fontSize: 12, fontWeight: 700, color: "#3b82f6",
          letterSpacing: "0.08em", textTransform: "uppercase",
          marginBottom: 10, fontFamily: "var(--font-body)",
        }}>
          Content Generator
        </p>
        <h2 style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(28px,4vw,42px)",
          fontWeight: 800, color: "#fff",
          marginBottom: 12, lineHeight: 1.08, letterSpacing: "-1.5px",
        }}>
          Build your week in seconds
        </h2>
        <p style={{
          fontSize: 16, color: "#8896b3",
          lineHeight: 1.7, fontFamily: "var(--font-body)", maxWidth: 480,
        }}>
          Fill in three fields and watch AI craft your full content calendar.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="anim-3" style={{
        background: "#0d1117", borderRadius: 20,
        border: "1px solid rgba(59,130,246,0.15)",
        padding: "32px", marginTop: 32,
        position: "relative", overflow: "hidden",
        boxShadow: "0 0 60px rgba(59,130,246,0.04)",
      }}>
        <div className="gen-scanline" />

        {/* DOTS HEADER */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          marginBottom: 24, paddingBottom: 18,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <span className="glow-dot-1" style={{ width:10,height:10,borderRadius:"50%",background:"#3b82f6",display:"block" }}/>
          <span className="glow-dot-2" style={{ width:10,height:10,borderRadius:"50%",background:"#3b82f6",opacity:0.5,display:"block" }}/>
          <span className="glow-dot-3" style={{ width:10,height:10,borderRadius:"50%",background:"#3b82f6",opacity:0.25,display:"block" }}/>
          <span style={{ fontSize:12,fontWeight:700,color:"#8896b3",letterSpacing:"0.06em",textTransform:"uppercase",fontFamily:"var(--font-body)" }}>
            Configure your content
          </span>
        </div>

        {/* FORM ROW */}
        <div id="gen-form-row" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:20 }}>

          {/* NICHE */}
          <div>
            <label style={{ fontSize:11,fontWeight:700,color:"#8896b3",letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:8,fontFamily:"var(--font-body)" }}>
              Your Niche
            </label>
            <input
              value={niche}
              onChange={e => setNiche(e.target.value)}
              placeholder="e.g. Fitness, Travel, Food"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor="#3b82f6"; e.target.style.boxShadow="0 0 0 3px rgba(59,130,246,0.15)"; }}
              onBlur={e => { e.target.style.borderColor="rgba(59,130,246,0.2)"; e.target.style.boxShadow="none"; }}
              onKeyDown={e => e.key==="Enter" && generate()}
            />
          </div>

          {/* PLATFORM */}
          <div>
            <label style={{ fontSize:11,fontWeight:700,color:"#8896b3",letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:8,fontFamily:"var(--font-body)" }}>
              Platform
            </label>
            <select
              value={platform}
              onChange={e => setPlatform(e.target.value)}
              style={{ ...inputStyle, color: platform===""?"#4a5a8a":"#e2eeff" }}
              onFocus={e => { e.currentTarget.style.borderColor="#3b82f6"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(59,130,246,0.15)"; }}
              onBlur={e => { e.currentTarget.style.borderColor="rgba(59,130,246,0.2)"; e.currentTarget.style.boxShadow="none"; }}
            >
              <option value="" disabled style={{ background:"#1e293b",color:"#4a5a8a" }}>Select platform...</option>
              {["Instagram","TikTok","LinkedIn","Twitter / X","Facebook","YouTube Shorts"].map(p => (
                <option key={p} value={p} style={{ background:"#1e293b",color:"#e2eeff" }}>{p}</option>
              ))}
            </select>
          </div>

          {/* TONE */}
          <div>
            <label style={{ fontSize:11,fontWeight:700,color:"#8896b3",letterSpacing:"0.06em",textTransform:"uppercase",display:"block",marginBottom:8,fontFamily:"var(--font-body)" }}>
              Tone
            </label>
            <select
              value={tone}
              onChange={e => setTone(e.target.value)}
              style={{ ...inputStyle, color: tone===""?"#4a5a8a":"#e2eeff" }}
              onFocus={e => { e.currentTarget.style.borderColor="#3b82f6"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(59,130,246,0.15)"; }}
              onBlur={e => { e.currentTarget.style.borderColor="rgba(59,130,246,0.2)"; e.currentTarget.style.boxShadow="none"; }}
            >
              <option value="" disabled style={{ background:"#1e293b",color:"#4a5a8a" }}>Select tone...</option>
              {["Friendly and Casual","Professional","Inspirational","Humorous","Educational"].map(t => (
                <option key={t} value={t} style={{ background:"#1e293b",color:"#e2eeff" }}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* GENERATE BUTTON */}
        <button
          onClick={generate}
          disabled={loading || !isReady}
          style={{
            width: "100%",
            background: loading||!isReady ? "rgba(59,130,246,0.25)" : "linear-gradient(135deg,#3b82f6,#6366f1)",
            color: "#fff", border: "none", borderRadius: 12,
            padding: "15px", fontSize: 16, fontWeight: 700,
            cursor: loading||!isReady ? "not-allowed" : "pointer",
            transition: "all 0.2s", letterSpacing: "0.02em",
            fontFamily: "var(--font-body)",
            boxShadow: loading||!isReady ? "none" : "0 4px 20px rgba(59,130,246,0.35)",
          }}
          onMouseEnter={e => {
            if (!loading && isReady) {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.55)";
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = loading||!isReady ? "none" : "0 4px 20px rgba(59,130,246,0.35)";
          }}
        >
          {loading ? "⏳ Generating your calendar..." : "✦ Generate 7-Day Content Calendar"}
        </button>

        {/* LOADING */}
        {loading && (
          <div style={{ textAlign:"center",padding:"36px 0" }}>
            <div className="spin-anim" style={{ width:32,height:32,border:"3px solid rgba(59,130,246,0.2)",borderTopColor:"#3b82f6",borderRadius:"50%",margin:"0 auto 12px" }}/>
            <p style={{ fontSize:14,color:"#8896b3",fontFamily:"var(--font-body)" }}>
              Crafting your {platform} calendar for &quot;{niche}&quot;...
            </p>
          </div>
        )}
      </div>

      {/* ── CALENDAR OUTPUT ── */}
      {calendar && !loading && (
        <div style={{ marginTop: 32 }}>

          {/* HEADER */}
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,marginBottom:24 }}>
            <div>
              <h3 style={{ fontFamily:"var(--font-body)",fontSize:"clamp(20px,3vw,28px)",fontWeight:800,color:"#fff",marginBottom:4,letterSpacing:"-0.5px" }}>
                Your 7-Day Calendar
              </h3>
              <p style={{ fontSize:13,color:"#8896b3",fontFamily:"var(--font-body)" }}>
                {niche} · {platform} · {tone}
              </p>
            </div>
            <button onClick={copyAll}
              style={{ background:"rgba(59,130,246,0.1)",color:"#60a5fa",border:"1px solid rgba(59,130,246,0.25)",borderRadius:10,padding:"9px 20px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"var(--font-body)",transition:"all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(59,130,246,0.2)";e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(59,130,246,0.1)";e.currentTarget.style.transform="none"; }}>
              Copy All
            </button>
          </div>

          {/* AI COVER IMAGE */}
          <div style={{ borderRadius:20,overflow:"hidden",border:"1px solid rgba(59,130,246,0.15)",marginBottom:24,background:"#0d1117" }}>

            {/* COVER HEADER */}
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                <span style={{ fontSize:16 }}>🖼</span>
                <span style={{ fontSize:14,fontWeight:700,color:"#fff",fontFamily:"var(--font-body)" }}>AI Cover Image</span>
                <span style={{ background:"rgba(16,185,129,0.1)",color:"#10b981",border:"1px solid rgba(16,185,129,0.25)",borderRadius:100,padding:"3px 10px",fontSize:11,fontWeight:700,fontFamily:"var(--font-body)" }}>
                  ✓ Generated
                </span>
              </div>
              <button
                onClick={() => downloadDoc(`${niche} - ${platform} Content Calendar\n\n7-Day Plan Generated by NichePost AI`, `${niche}_Cover`)}
                style={{ background:"rgba(59,130,246,0.1)",color:"#60a5fa",border:"1px solid rgba(59,130,246,0.25)",borderRadius:8,padding:"7px 16px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--font-body)",transition:"all 0.2s",display:"flex",alignItems:"center",gap:6 }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(59,130,246,0.2)";e.currentTarget.style.transform="translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(59,130,246,0.1)";e.currentTarget.style.transform="none"; }}>
                ⬇ Download
              </button>
            </div>

            {/* COVER IMAGE */}
            <div style={{ height:260,position:"relative",overflow:"hidden" }}>

              {/* LOADING SHIMMER */}
              {coverImage && !imgLoaded && (
                <div style={{
                  position:"absolute",inset:0,
                  background:"linear-gradient(90deg,#111827 25%,#1e293b 50%,#111827 75%)",
                  backgroundSize:"200% 100%",
                  animation:"shimmer 1.5s infinite",
                  display:"flex",alignItems:"center",justifyContent:"center",
                }}>
                  <p style={{ color:"#3a4a66",fontSize:13,fontFamily:"var(--font-body)" }}>Generating AI image...</p>
                </div>
              )}

              
            {/* ACTUAL IMAGE */}
{coverImage ? (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={coverImage}
    alt={`${niche} content calendar cover`}
    style={{
      width:"100%", height:"100%", objectFit:"cover",
      display: imgLoaded ? "block" : "none",
    }}
    onLoad={() => setImgLoaded(true)}
    onError={() => {
      setImgLoaded(true);
      setCoverImage(null);
    }}
  />
) : null}

              {/* FALLBACK GRADIENT */}
              {(!coverImage || (coverImage && imgLoaded && !coverImage)) && (
                <div style={{
                  position:"absolute",inset:0,
                  background:"linear-gradient(135deg,#0d1e38 0%,#1e1b4b 50%,#0f172a 100%)",
                  display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8,
                }}>
                  <p style={{ fontSize:40,margin:0 }}>🎨</p>
                  <p style={{ color:"#3a4a66",fontSize:13,fontFamily:"var(--font-body)" }}>Cover image unavailable</p>
                </div>
              )}

              {/* OVERLAY TEXT — always on top */}
              <div style={{
                position:"absolute",inset:0,
                background:"rgba(0,0,0,0.45)",
                display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8,
                opacity: imgLoaded || !coverImage ? 1 : 0,
                transition:"opacity 0.3s",
              }}>
                <h2 style={{
                  fontFamily:"var(--font-body)",
                  fontSize:"clamp(20px,4vw,32px)",
                  color:"#fff",fontWeight:800,
                  textShadow:"0 2px 20px rgba(0,0,0,0.8)",
                  marginBottom:4,letterSpacing:"-0.5px",textAlign:"center",
                  padding:"0 20px",
                }}>
                  {niche} Content Calendar
                </h2>
                <p style={{ fontSize:14,color:"rgba(255,255,255,0.75)",fontWeight:500,fontFamily:"var(--font-body)" }}>
                  {platform} · 7-Day Plan · NichePost AI
                </p>
              </div>
            </div>
          </div>

          {/* DAY CARDS */}
          <div id="cal-grid-inner" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16 }}>
            {calendar.map((item, i) => {
              const fullText = item.caption+"\n\n"+item.hashtags.join(" ");
              return (
                <div key={i} className={`cal-d${i}`}
                  style={{ background:"#0d1117",borderRadius:16,border:"1px solid rgba(59,130,246,0.12)",padding:24,transition:"all 0.25s",boxShadow:"0 2px 20px rgba(0,0,0,0.3)" }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.borderColor="rgba(59,130,246,0.35)";e.currentTarget.style.boxShadow="0 8px 32px rgba(59,130,246,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="none";e.currentTarget.style.borderColor="rgba(59,130,246,0.12)";e.currentTarget.style.boxShadow="0 2px 20px rgba(0,0,0,0.3)"; }}>

                  {/* DAY HEADER */}
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16 }}>
                    <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                      <div style={{ background:"rgba(59,130,246,0.12)",border:"1px solid rgba(59,130,246,0.25)",borderRadius:10,padding:"6px 10px",textAlign:"center",minWidth:48 }}>
                        <div style={{ fontSize:10,fontWeight:700,color:"#60a5fa",textTransform:"uppercase",letterSpacing:"0.05em",fontFamily:"var(--font-body)" }}>{DAYSHORT[i]}</div>
                        <div style={{ fontSize:18,fontWeight:800,color:"#60a5fa",lineHeight:1.2,fontFamily:"var(--font-body)" }}>{DAYNUM[i]}</div>
                      </div>
                      <h4 style={{ fontSize:16,fontWeight:700,color:"#fff",margin:0,fontFamily:"var(--font-body)" }}>
                        {DAY_TITLES[i]}
                      </h4>
                    </div>
                    <span style={{ background:"rgba(59,130,246,0.12)",color:"#60a5fa",border:"1px solid rgba(59,130,246,0.25)",borderRadius:100,padding:"4px 12px",fontSize:11,fontWeight:700,fontFamily:"var(--font-body)",whiteSpace:"nowrap" }}>
                      {platform}
                    </span>
                  </div>

                  {/* CAPTION */}
                  <div style={{ marginBottom:14 }}>
                    <p style={{ fontSize:11,fontWeight:700,color:"#8896b3",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:6,fontFamily:"var(--font-body)" }}>Caption</p>
                    <p style={{ fontSize:14,color:"#c8d8f0",lineHeight:1.65,fontFamily:"var(--font-body)" }}>{item.caption}</p>
                  </div>

                  {/* HASHTAGS */}
                  <div style={{ marginBottom:16 }}>
                    <p style={{ fontSize:11,fontWeight:700,color:"#8896b3",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:8,fontFamily:"var(--font-body)" }}>Hashtags</p>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                      {item.hashtags.map((tag, j) => (
                        <span key={j} style={{ fontSize:12,fontWeight:600,color:"#60a5fa",background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.2)",borderRadius:100,padding:"4px 10px",fontFamily:"var(--font-body)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize:12,color:"#3a4a66",fontFamily:"var(--font-body)" }}>
                      {item.caption.length} chars
                    </span>
                    <div style={{ display:"flex",gap:8 }}>
                      <button onClick={() => downloadDoc(fullText, `${item.day} Post`)}
                        style={{ background:"rgba(59,130,246,0.1)",color:"#60a5fa",border:"1px solid rgba(59,130,246,0.2)",borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--font-body)",transition:"all 0.15s",display:"flex",alignItems:"center",gap:5 }}
                        onMouseEnter={e => { e.currentTarget.style.background="rgba(59,130,246,0.2)";e.currentTarget.style.transform="translateY(-1px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background="rgba(59,130,246,0.1)";e.currentTarget.style.transform="none"; }}>
                        ⬇ .doc
                      </button>
                      <button onClick={() => copyPost(i, fullText)}
                        style={{
                          background: copiedIdx===i ? "rgba(16,185,129,0.15)" : "linear-gradient(135deg,#3b82f6,#6366f1)",
                          color: copiedIdx===i ? "#10b981" : "#fff",
                          border: copiedIdx===i ? "1px solid rgba(16,185,129,0.3)" : "none",
                          borderRadius:8,padding:"7px 18px",fontSize:12,fontWeight:700,
                          cursor:"pointer",fontFamily:"var(--font-body)",transition:"all 0.15s",
                          boxShadow: copiedIdx===i ? "none" : "0 2px 10px rgba(59,130,246,0.3)",
                        }}
                        onMouseEnter={e => { if(copiedIdx!==i){e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow="0 4px 16px rgba(59,130,246,0.5)";} }}
                        onMouseLeave={e => { e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=copiedIdx===i?"none":"0 2px 10px rgba(59,130,246,0.3)"; }}>
                        {copiedIdx===i ? "✓ Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* REGENERATE */}
          <div style={{ textAlign:"center",marginTop:28 }}>
            <button onClick={generate}
              style={{ background:"rgba(59,130,246,0.1)",color:"#60a5fa",border:"1px solid rgba(59,130,246,0.25)",borderRadius:12,padding:"12px 32px",fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"var(--font-body)",transition:"all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(59,130,246,0.2)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(59,130,246,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(59,130,246,0.1)";e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none"; }}>
              ↺ Regenerate Calendar
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        select option {
          background: #1e293b !important;
          color: #e2eeff !important;
          font-family: var(--font-body) !important;
        }
        select option:hover, select option:checked {
          background: #3b82f6 !important;
          color: #fff !important;
        }
        #gen-form-row input::placeholder { color: #4a5a8a; }
        @media (max-width: 900px) {
          #gen-form-row { grid-template-columns: 1fr 1fr !important; }
          #cal-grid-inner { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #gen-form-row { grid-template-columns: 1fr !important; }
          #cal-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}