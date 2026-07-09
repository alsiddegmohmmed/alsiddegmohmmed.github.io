import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "monospace"]
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        green: "var(--green)",
        "green-soft": "var(--green-soft)",
        blueprint: "var(--blueprint)",
        copper: "var(--copper)"
      },
      boxShadow: {
        lift: "0 24px 80px var(--shadow)"
      }
    }
  },
  plugins: []
};

export default config;
