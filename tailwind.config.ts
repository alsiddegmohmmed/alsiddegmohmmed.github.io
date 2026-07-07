import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#08111f",
        panel: "#101a2b",
        mist: "#eef4f8",
        signal: "#26c6da",
        copper: "#d58a4a",
        moss: "#6fa678"
      },
      boxShadow: {
        lift: "0 24px 80px rgba(8, 17, 31, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
