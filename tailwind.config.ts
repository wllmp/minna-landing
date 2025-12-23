import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        minna: {
          // Light, airy base
          cream: "#faf8f5",
          white: "#ffffff",
          paper: "#f5f3ef",
          
          // Japanese indigo for text
          ink: "#1a1b3a",
          slate: "#4a4b6a",
          muted: "#8b8ca8",
          
          // City pop pastels
          sakura: "#ffb7c5",
          coral: "#ff8a80",
          sunset: "#ffd180",
          sky: "#81d4fa",
          mint: "#a7ffeb",
          lavender: "#d1c4e9",
          
          // Accent - vibrant city pop pink
          pop: "#ff4081",
          electric: "#00e5ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "city-pop": "linear-gradient(135deg, #ffb7c5 0%, #ffd180 25%, #81d4fa 50%, #d1c4e9 75%, #ffb7c5 100%)",
        "sunset": "linear-gradient(180deg, #81d4fa 0%, #ffb7c5 50%, #ffd180 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
