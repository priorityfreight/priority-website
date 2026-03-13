/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3B",
          burgundy: "#800020",
          orbit: "#B33A5B",
          steel: "#909EAE",
          light: "#E5E5E5",
          muted: "#CFCFCF",
          ink: "#4A5568",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(3, 10, 24, 0.24)",
        glow: "0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(128, 0, 32, 0.18)",
      },
      backgroundImage: {
        "brand-orbit":
          "linear-gradient(90deg, #800020 0%, #B33A5B 55%, #909EAE 100%)",
      },
    },
  },
  plugins: [],
};
