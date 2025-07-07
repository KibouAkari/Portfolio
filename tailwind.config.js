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
    },
  },
  plugins: [],
};
