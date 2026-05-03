import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { niche, platform } = await req.json();

    const prompt = encodeURIComponent(
      `Professional social media cover for ${niche} on ${platform}, modern design, vibrant colors, high quality`
    );

    const seed = Math.floor(Math.random() * 999999);
    const url = `https://image.pollinations.ai/prompt/${prompt}?width=1200&height=630&nologo=true&enhance=true&seed=${seed}`;

    return NextResponse.json({ url });

  } catch {
    return NextResponse.json({ error: "Image failed" }, { status: 500 });
  }
}