import type { Config } from "tailwindcss";

const config = {
    content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      fontFamily: {
  display: ["'DM Serif Display'", "Georgia", "serif"],
  body: ["'DM Sans'", "system-ui", "sans-serif"],
  mono: ["'JetBrains Mono'", "monospace"],
},
      colors: {
        ink: {
          50: "#f7f6f3",
          100: "#edeae3",
          200: "#d9d4c8",
          300: "#c0b9a8",
          400: "#a49989",
          500: "#8a7d6e",
          600: "#6e6357",
          700: "#534b42",
          800: "#38322c",
          900: "#1e1a16",
          950: "#0f0d0a",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        sage: {
          50: "#f0f4f1",
          100: "#dce8de",
          200: "#b8d1bc",
          300: "#8eb598",
          400: "#659674",
          500: "#4a7a57",
          600: "#3a6045",
          700: "#2c4a35",
          800: "#1e3325",
          900: "#111d15",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;