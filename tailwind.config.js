/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#6B3CC9",
        secondary: "#F28D35",
        accent1: "#E1F1FD",
      },
    },
  },
  plugins: [],
};

