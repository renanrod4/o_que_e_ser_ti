import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "scroll var(--duration) linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      // Adicionando textShadow ao tema
      textShadow: {
        'yellow': '0 0 10px rgba(0, 0, 0, 0.5), 0 0 30px yellow',
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white:"var(--foreground)",
        darker:"#121317",
        green: "#0CCE6B",
        yellow: "#FDE74C",
        red: "#DB162F",
        purple: "#6F2DBD",
        blue: "#246EB9",
        orange:"#eb965c",
      },
    },
  },
  plugins: [
    // Plugin personalizado para adicionar a classe text-shadow
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-yellow': {
          textShadow: '0 0 1px rgba(0, 0, 0, 1), 0 0 30px yellow',
          
        },
      });
    },
  ],
} satisfies Config;
