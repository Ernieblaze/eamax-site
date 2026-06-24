/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep Blue family
          blue: "#003580",
          navy: "#002456",
          ink: "#001b42",
          sky: "#1158b8",
          // Green family
          green: "#00A651",
          "green-dark": "#008844",
          "green-light": "#1fc16b",
          // Neutral tints
          mist: "#EAF1FA",
          cloud: "#F4F8FD",
        },
      },
      fontFamily: {
        display: ['"Sora"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0, 53, 128, 0.22)",
        "card-hover": "0 22px 48px -16px rgba(0, 53, 128, 0.35)",
        glow: "0 0 0 4px rgba(0, 166, 81, 0.18)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        floaty: "floaty 3.5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
