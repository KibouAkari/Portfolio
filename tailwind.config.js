module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Dark Mode Toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: "#6366F1", // Violett
      },
      transform: {
        "style-3d": "preserve-3d",
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
