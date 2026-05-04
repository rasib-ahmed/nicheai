import { notFound } from "next/navigation";

const BLOGS = [
  {
    slug: "how-to-build-content-calendar",
    cat: "Strategy", catColor: "#3b82f6", emoji: "✍️",
    title: "How to Build a Content Calendar That Gets Engagement",
    excerpt: "A content calendar is your strategic weapon for building an audience that cares.",
    author: "James Lee", authorColor: "#3b82f6", date: "May 1, 2026", read: "5 min read",
    body: `
      <p>A content calendar is your strategic weapon for building an audience that cares. Most creators treat it like a chore, but top creators treat it like a product roadmap.</p>
      <h2>Start with your audience</h2>
      <p>Before planning a single post, write down three things: who your ideal follower is, what problem they have, and what transformation you offer. Every post should connect to at least one of these.</p>
      <h2>The 3-2-2 formula</h2>
      <p>Plan 3 educational posts, 2 entertaining posts, and 2 personal posts per week. This mix keeps your audience educated, entertained, and emotionally connected.</p>
      <ul>
        <li>Educational: tutorials, tips, how-tos</li>
        <li>Entertaining: relatable content, trends, challenges</li>
        <li>Personal: your story, wins, behind the scenes</li>
      </ul>
      <h2>Batch your creation</h2>
      <p>Set aside one day per week to write all captions and prepare visuals. This removes daily decision fatigue and keeps you consistent even on your busiest days.</p>
      <h2>Tools that help</h2>
      <p>Use NichePost AI to generate your entire week in seconds. Then schedule using Buffer or Later. Review analytics every two weeks and adjust based on what performed best.</p>
      <h2>The key insight</h2>
      <p>Consistency beats quality every single time for new creators. Show up daily and improve as you go. Your audience rewards consistency far more than occasional perfection.</p>
    `,
  },
  {
    slug: "instagram-vs-tiktok-2026",
    cat: "Instagram", catColor: "#e1306c", emoji: "📱",
    title: "Instagram vs TikTok: Where Should Your Niche Live in 2026?",
    excerpt: "Choosing the wrong platform is the number one reason creators burn out.",
    author: "Ahmed Malik", authorColor: "#8b5cf6", date: "Apr 28, 2026", read: "7 min read",
    body: `
      <p>Choosing the wrong platform is the number one reason creators burn out. You can make incredible content and still fail if it lands in the wrong place.</p>
      <h2>Instagram in 2026</h2>
      <p>Instagram is still king for lifestyle, fashion, food, travel, and B2B niches. Its audience skews slightly older and spends more money. Reels now dominate reach, but carousels still perform exceptionally well for educational content.</p>
      <ul>
        <li>Best for: visual niches, product-based businesses, coaching</li>
        <li>Content format: Reels, carousels, Stories</li>
        <li>Posting frequency: 4-5x per week for best results</li>
      </ul>
      <h2>TikTok in 2026</h2>
      <p>TikTok has the most democratic algorithm in social media. A brand new account can go viral on day one. It rewards raw, authentic, entertaining content above everything else.</p>
      <ul>
        <li>Best for: entertainment, food, fitness, finance, education</li>
        <li>Content format: vertical video only</li>
        <li>Posting frequency: daily or even 2x per day</li>
      </ul>
      <h2>Our recommendation</h2>
      <p>Start on one platform, master it, then expand. If you are video-comfortable, start on TikTok. If you prefer visuals and writing, start on Instagram. Do not split your energy across both until you have 10,000 followers on one.</p>
    `,
  },
  {
    slug: "hashtag-mistakes-killing-reach",
    cat: "Strategy", catColor: "#3b82f6", emoji: "🚀",
    title: "The 3 Hashtag Mistakes Killing Your Reach",
    excerpt: "Hashtags are one of the most misunderstood tools in social media.",
    author: "Sara Khan", authorColor: "#10b981", date: "Apr 22, 2026", read: "4 min read",
    body: `
      <p>Hashtags are one of the most misunderstood tools in social media. Done right, they can put your content in front of thousands of new people. Done wrong, they actively hurt your reach.</p>
      <h2>Mistake 1: Using hashtags that are too big</h2>
      <p>If you use a hashtag with 50 million posts, your content will be buried in seconds. Nobody will ever find it. Instead, use a mix of small under 100K posts, medium 100K to 1M posts, and large 1M to 5M posts hashtags.</p>
      <h2>Mistake 2: Using the same hashtags every post</h2>
      <p>Platforms penalise repetitive hashtag sets. They read it as spam behaviour. Create 5 to 6 different hashtag groups and rotate them. Each group should be themed around a different aspect of your niche.</p>
      <h2>Mistake 3: Ignoring niche hashtags</h2>
      <p>The best hashtags are the specific ones your ideal audience actually follows. Instead of using fitness with 200 million posts, try homeworkoutroutine or fitnessmotivation2026. Niche hashtags have smaller but far more engaged communities.</p>
      <ul>
        <li>Use 20-30 hashtags per Instagram post</li>
        <li>Use 3-5 hashtags per TikTok video</li>
        <li>Always include at least 3 niche-specific tags</li>
      </ul>
    `,
  },
  {
    slug: "10-content-ideas-zero-inspiration",
    cat: "AI Tools", catColor: "#f59e0b", emoji: "💡",
    title: "10 Content Ideas When You Have Zero Inspiration",
    excerpt: "Every creator hits a wall. Here are 10 proven content ideas that work in almost any niche.",
    author: "James Lee", authorColor: "#3b82f6", date: "Apr 18, 2026", read: "4 min read",
    body: `
      <p>Every creator hits a wall. The blank page stares back at you and your mind goes completely empty. Here are 10 proven content ideas that work in almost any niche, any day of the week.</p>
      <h2>The idea list</h2>
      <ul>
        <li>Answer a FAQ — Go to your DMs or comments and pick the most common question you get asked. Answer it thoroughly.</li>
        <li>Share a mistake — Talk about something you got wrong early on and what you learned. Audiences love vulnerability and real stories.</li>
        <li>React to a trend — Find a trending topic in your niche and give your unique opinion or take on it.</li>
        <li>Behind the scenes — Show your workspace, your routine, your process. People are fascinated by how creators actually work.</li>
        <li>Then vs now — Share your journey. Where were you a year ago versus where you are now?</li>
        <li>Tool or resource recommendation — Share your three favourite tools, apps, or books for your niche.</li>
        <li>Myth-busting post — Pick a common misconception in your niche and debunk it with facts and your experience.</li>
        <li>Day in the life — Document a single day in your life as a creator. Raw and unfiltered always performs well.</li>
        <li>Community question — Ask your audience a question. This drives comments and the responses become your next week of content.</li>
        <li>Repurpose your best post — Take your highest-performing post from 6 months ago and recreate it in a different format.</li>
      </ul>
      <h2>The key insight</h2>
      <p>You will never truly run out of content ideas. The trick is to build a system for capturing ideas when they come to you, not when you are sitting down to create.</p>
    `,
  },
  {
    slug: "find-perfect-niche-2026",
    cat: "Productivity", catColor: "#10b981", emoji: "🎯",
    title: "How to Find Your Perfect Niche in 2026",
    excerpt: "The biggest mistake new creators make is trying to appeal to everyone.",
    author: "Ahmed Malik", authorColor: "#8b5cf6", date: "Apr 14, 2026", read: "6 min read",
    body: `
      <p>The biggest mistake new creators make is trying to appeal to everyone. When you speak to everyone, you connect with no one. Finding your niche is the single most important decision you will make as a creator.</p>
      <h2>The three-circle method</h2>
      <p>Your perfect niche sits at the intersection of three things: what you are passionate about, what you are knowledgeable about, and what people are actively searching for. If you only have two of the three, your niche will eventually fail.</p>
      <h2>How to validate your niche</h2>
      <ul>
        <li>Search your topic on YouTube and look for channels with over 100K subscribers</li>
        <li>Check if there are active communities on Reddit or Facebook about it</li>
        <li>Look for courses or books being sold about this topic</li>
        <li>See if there are brands spending money on influencers in this space</li>
      </ul>
      <h2>Niche down further than you think</h2>
      <p>Do not be a fitness creator. Be a fitness creator for busy mothers over 40. Do not be a travel creator. Be a budget travel creator for solo travellers in Southeast Asia. The more specific you are, the faster you will grow.</p>
      <h2>When to expand</h2>
      <p>Once you have 50,000 followers in a specific niche, you can start to expand. But in the beginning, specificity is your greatest advantage.</p>
    `,
  },
  {
    slug: "metrics-that-matter-audience-growth",
    cat: "AI Tools", catColor: "#f59e0b", emoji: "📊",
    title: "Which Metrics Actually Matter for Growing Your Audience?",
    excerpt: "Most creators obsess over the wrong numbers. Follower count is one of the least useful metrics.",
    author: "Sara Khan", authorColor: "#10b981", date: "Apr 10, 2026", read: "5 min read",
    body: `
      <p>Most creators obsess over the wrong numbers. Follower count feels important but it is actually one of the least useful metrics for understanding whether your content strategy is working.</p>
      <h2>Engagement rate — the most important metric</h2>
      <p>Engagement rate is your total engagements divided by your reach, expressed as a percentage. A healthy engagement rate is 3 to 6 percent on Instagram, 5 to 10 percent on TikTok. If yours is below this, your content is reaching people but not resonating.</p>
      <h2>Saves and shares over likes</h2>
      <p>Saves tell you that someone found your content valuable enough to come back to. Shares tell you they trusted it enough to put their name on it and send it to others. These two metrics are far more powerful signals than likes for algorithm growth.</p>
      <ul>
        <li>High saves means educational or reference content is landing well</li>
        <li>High shares means your content is emotionally resonant or extremely useful</li>
        <li>High comments means you are sparking conversation which boosts reach</li>
      </ul>
      <h2>Watch time and completion rate</h2>
      <p>For video content, completion rate is everything. If people watch your entire video, the algorithm takes that as a signal to push it to more people. Hook the first 3 seconds, deliver value fast, and always end with a clear call to action.</p>
      <h2>How often to check</h2>
      <p>Check your analytics every two weeks, not every day. Daily checking leads to emotional decision-making. Fortnightly reviews let you spot actual patterns and make strategic improvements.</p>
    `,
  },
];

export function generateStaticParams() {
  return BLOGS.map(b => ({ slug: b.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = BLOGS.find(b => b.slug === params.slug);
  if (!blog) notFound();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080c14",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>

      {/* NAV */}
      <nav style={{
        background: "rgba(8,12,20,0.98)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        position: "sticky", top: 0, zIndex: 100,
        padding: "0 40px", height: 64,
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="/" style={{
          display: "flex", alignItems: "center", gap: 10,
          textDecoration: "none",
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 15, color: "#fff", fontWeight: 800,
          }}>⚡</div>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>
            NichePost <span style={{
              background: "linear-gradient(135deg, #3b82f6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>AI</span>
          </span>
        </a>
        <a href="/#blog" style={{
          background: "rgba(59,130,246,0.1)", color: "#60a5fa",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 10, padding: "8px 18px",
          fontSize: 13, fontWeight: 700,
          textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 6,
        }}>
          ← Back to Blog
        </a>
      </nav>

      {/* HERO */}
      <div style={{
        maxWidth: 800, margin: "0 auto",
        padding: "56px 40px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>

        {/* CAT BADGE */}
        <div style={{
          display: "inline-flex", marginBottom: 20,
          background: `${blog.catColor}15`,
          border: `1px solid ${blog.catColor}35`,
          borderRadius: 100, padding: "5px 14px",
          fontSize: 11, fontWeight: 700,
          color: blog.catColor, letterSpacing: "0.08em",
        }}>
          {blog.cat.toUpperCase()}
        </div>

        {/* TITLE */}
        <h1 style={{
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 800, lineHeight: 1.12,
          color: "#fff", marginBottom: 20,
          letterSpacing: "-1px",
        }}>{blog.title}</h1>

        {/* EXCERPT */}
        <p style={{
          fontSize: 18, color: "#8896b3",
          lineHeight: 1.75, marginBottom: 28,
        }}>{blog.excerpt}</p>

        {/* AUTHOR ROW */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: 12, paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: `linear-gradient(135deg, ${blog.authorColor}, ${blog.authorColor}88)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 800, color: "#fff",
          }}>
            {blog.author[0]}
          </div>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: 0 }}>
              {blog.author}
            </p>
            <p style={{ fontSize: 13, color: "#60a5fa", margin: 0 }}>
              {blog.date} · {blog.read}
            </p>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 40px 80px" }}
        dangerouslySetInnerHTML={{
          __html: blog.body
            .replace(/<h2>/g, `<h2 style="font-size:24px;color:#fff;margin:36px 0 16px;font-weight:700;letter-spacing:-0.3px;line-height:1.2;">`)
            .replace(/<p>/g, `<p style="font-size:17px;color:#8896b3;line-height:1.9;margin-bottom:22px;">`)
            .replace(/<ul>/g, `<ul style="padding-left:28px;margin-bottom:24px;list-style:disc;">`)
            .replace(/<li>/g, `<li style="font-size:16px;color:#8896b3;line-height:1.8;margin-bottom:10px;">`)
        }}
      />

      {/* BOTTOM CTA */}
      <div style={{
        maxWidth: 800, margin: "0 auto",
        padding: "0 40px 80px",
      }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1))",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: 20, padding: "36px 32px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>⚡</div>
          <h3 style={{
            fontSize: 22, fontWeight: 800, color: "#fff",
            marginBottom: 10, letterSpacing: "-0.3px",
          }}>
            Ready to generate your 7-day calendar?
          </h3>
          <p style={{
            fontSize: 15, color: "#8896b3", marginBottom: 20, lineHeight: 1.6,
          }}>
            Stop staring at a blank page. NichePost AI creates your full week of content in seconds.
          </p>
          <a href="/#generator" style={{
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "#fff", textDecoration: "none",
            borderRadius: 12, padding: "13px 28px",
            fontSize: 15, fontWeight: 700,
            display: "inline-flex", alignItems: "center", gap: 8,
            boxShadow: "0 6px 24px rgba(59,130,246,0.4)",
          }}>
            ⚡ Try Free Now →
          </a>
        </div>
      </div>
    </div>
  );
}