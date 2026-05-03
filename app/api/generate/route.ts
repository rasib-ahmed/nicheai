import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { niche, platform, tone } = await req.json();

    if (!niche || !platform || !tone) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "GROQ_API_KEY is not set in .env.local" }, { status: 500 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are a JSON generator. Output ONLY raw JSON. No explanation. No markdown. No backticks. No code fences. Just the JSON object.",
          },
          {
            role: "user",
            content: `Create a 7-day social media content calendar for:
Platform: ${platform}
Niche: ${niche}
Tone: ${tone}

Return ONLY this JSON with exactly 7 days. Keep captions under 200 characters. No apostrophes or special characters inside values:

{"days":[{"day":1,"title":"Title here","caption":"Caption here","hashtags":["tag1","tag2","tag3","tag4","tag5"]},{"day":2,"title":"Title here","caption":"Caption here","hashtags":["tag1","tag2","tag3","tag4","tag5"]},{"day":3,"title":"Title here","caption":"Caption here","hashtags":["tag1","tag2","tag3","tag4","tag5"]},{"day":4,"title":"Title here","caption":"Caption here","hashtags":["tag1","tag2","tag3","tag4","tag5"]},{"day":5,"title":"Title here","caption":"Caption here","hashtags":["tag1","tag2","tag3","tag4","tag5"]},{"day":6,"title":"Title here","caption":"Caption here","hashtags":["tag1","tag2","tag3","tag4","tag5"]},{"day":7,"title":"Title here","caption":"Caption here","hashtags":["tag1","tag2","tag3","tag4","tag5"]}]}`,
          },
        ],
        temperature: 0.5,
        max_tokens: 2000,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || "Groq API error" }, { status: 500 });
    }

    const raw = data.choices[0].message.content;
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in AI response");

    const cleaned = jsonMatch[0]
      .replace(/[\u2018\u2019\u201C\u201D]/g, "")
      .replace(/\r?\n/g, " ")
      .trim();

    const parsed = JSON.parse(cleaned);

    if (!parsed.days || !Array.isArray(parsed.days)) {
      throw new Error("Invalid response structure from AI");
    }

    return NextResponse.json(parsed);

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}