import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green:"#0CCE6B",
        yellow:"#FDE74C",
        red:"#DB162F",
        purple:"#6F2DBD",
        blue:"#246EB9"
      },
    },
  },
  plugins: [],
} satisfies Config;
