import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NichePost AI — Your 7-Day Content Calendar, Instantly Made",
  description: "Stop staring at a blank page. NichePost AI plans your entire week in one click.",
  keywords: "content calendar, AI content, social media, hashtags, captions, NichePost",
  openGraph: {
    title: "NichePost AI — Your 7-Day Content Calendar",
    description: "Generate 7 days of captions, hashtags, and cover images in seconds.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}