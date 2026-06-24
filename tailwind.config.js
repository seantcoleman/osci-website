/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "pulse-bg": "#0A080B",
        "pulse-panel": "rgba(255,255,255,0.06)",
        "pulse-panel-elevated": "rgba(255,255,255,0.10)",
        "pulse-stroke": "rgba(255,255,255,0.08)",
        "pulse-stroke-strong": "rgba(255,255,255,0.18)",
        "pulse-text": "#ffffff",
        "pulse-text-secondary": "rgba(255,255,255,0.62)",
        "pulse-text-tertiary": "rgba(255,255,255,0.38)",
        "pulse-pink": "#FF2D8A",
        "pulse-purple": "#7B2CFF",
        "pulse-cyan": "#47DBFF",
      },
      backgroundImage: {
        "pulse-cta": "linear-gradient(90deg, #FF2D8A 0%, #7B2CFF 50%, #47DBFF 100%)",
      },
      borderRadius: {
        "pulse-card": "24px",
        "pulse-panel": "18px",
        "pulse-pill": "22px",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      animation: {
        "waveform": "waveform 1.4s ease-in-out infinite",
        "aurora-pulse": "aurora-pulse 8s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
      keyframes: {
        waveform: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        "aurora-pulse": {
          "0%": { opacity: "0.45" },
          "100%": { opacity: "0.65" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
