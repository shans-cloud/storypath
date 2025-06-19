/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.6)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        primary: {
          DEFAULT: "#219EBC", // Deep Dive as the primary color
          light: "#8ECAE6", // Serene Sky
          dark: "#023047", // Midnight Hour
        },
        accent: {
          DEFAULT: "#FFB703", // Golden Ray as the main accent
          dark: "#FB8500", // Blazing Ember
        },
        gray: {
          DEFAULT: "#B2B2B2", // Neutral Gray
          cool: "#A0A0A0", // Cooler Gray
          dark: "#404040", // Dark Charcoal
          lightest: "#EEEEEE", // Lightest gray color
        },
        cherry: {
          DEFAULT: "#C1121F",
          dark: "#780000",
          light: "#C1525F",
        },
        forrest: {
          DEFAULT: "#104911",
          bright: "#7cb518",
        },
        background: "#eeeeee",
      },
    },
  },
  plugins: [],
};
