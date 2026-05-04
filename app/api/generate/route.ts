import { NextRequest, NextResponse } from "next/server";

const FALLBACK = [
  { day:"Monday",    caption:"Starting the week strong! Consistency is your superpower. Every small step today builds massive results tomorrow.",    hashtags:["#mondaymotivation","#contentcreator","#consistency","#growyouraudience"] },
  { day:"Tuesday",   caption:"Hot take: progress beats perfection every single time. The messy middle is where the real magic happens. Keep going!", hashtags:["#tuesdaytips","#creatoreconomy","#growthmindset","#organicgrowth"] },
  { day:"Wednesday", caption:"Mid-week check-in! Creators winning in your niche simply started and kept going. Today is your day to shine.",         hashtags:["#wednesdaywisdom","#contentmarketing","#socialmediatips","#createcontent"] },
  { day:"Thursday",  caption:"Thursday reminder: the audience you want is waiting for exactly what you create. Do not hold back — post it!",         hashtags:["#thursdaythoughts","#onlinebusiness","#contentideas","#personalbranding"] },
  { day:"Friday",    caption:"Friday energy! End the week with your strongest post yet. Your future self will thank you for showing up today.",      hashtags:["#fridayvibes","#socialmedia","#buildyourbrand","#audiencegrowth"] },
  { day:"Saturday",  caption:"Weekend creators unite! This is when your audience has the most time to engage, watch, and share. Make it count.",    hashtags:["#saturdayvibes","#weekendcontent","#creativecommunity","#contentgrowth"] },
  { day:"Sunday",    caption:"Sunday wrap-up! Celebrate how far you came this week. Even the smallest win deserves recognition. See you next week!", hashtags:["#sundayinspo","#weeklyrecap","#contentplanning","#creator101"] },
];

// Niche ke hisaab se relevant image seeds
const NICHE_SEEDS: Record<string, number> = {
  fitness: 1, workout: 1, gym: 1,
  travel: 5, adventure: 5,
  food: 20, cooking: 20, recipe: 20,
  business: 30, entrepreneur: 30,
  fashion: 40, style: 40,
  tech: 50, technology: 50,
  beauty: 60, skincare: 60,
  nature: 70, environment: 70,
  music: 80, art: 90,
  education: 100, learning: 100,
};

function getImageSeed(niche: string): number {
  const lower = niche.toLowerCase();
  for (const key of Object.keys(NICHE_SEEDS)) {
    if (lower.includes(key)) return NICHE_SEEDS[key];
  }
  return Math.floor(Math.random() * 200);
}

export async function POST(req: NextRequest) {
  try {
    const { niche, platform, tone } = await req.json();

    // Fast reliable image from Picsum
    const seed = getImageSeed(niche);
    const imageUrl = `https://picsum.photos/seed/${seed}/1200/400`;

    // NO API KEY — fallback
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey || apiKey.length < 10) {
      return NextResponse.json({ calendar: FALLBACK, imageUrl });
    }

    // ANTHROPIC
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1500,
        messages: [{
          role: "user",
          content: `Generate a 7-day ${platform} content calendar for the "${niche}" niche with "${tone}" tone. Return ONLY a valid JSON array of 7 objects with keys: day (string), caption (2-3 engaging sentences), hashtags (array of 4 strings starting with #). Raw JSON only, no markdown, no extra text.`,
        }],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ calendar: FALLBACK, imageUrl });
    }

    const data = await response.json();
    const raw = data.content?.[0]?.text || "";

    try {
      const cleaned = raw.replace(/```json|```/g, "").trim();
      const calendar = JSON.parse(cleaned);
      if (Array.isArray(calendar) && calendar.length > 0) {
        return NextResponse.json({ calendar, imageUrl });
      }
    } catch {
      return NextResponse.json({ calendar: FALLBACK, imageUrl });
    }

    return NextResponse.json({ calendar: FALLBACK, imageUrl });

  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json({ calendar: FALLBACK, imageUrl: null });
  }
}