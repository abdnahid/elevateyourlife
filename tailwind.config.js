/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        dark: {
          light: "#203239",
          DEFAULT: "#204050",
        },
        theme: {
          DEFAULT: "#FFDFCD",
          dark: "#D45700",
        },
        bodyBg: "#FAF9F7",
        bodyBgAlt: "#F2E9E3",
        success: "#76BA99",
        error: "#FD5D5D",
        transparent: "rbba(255,255,255,0)",
      },
      fontFamily: {
        normal: ["'Archivo', sans-serif", ...defaultTheme.fontFamily.mono],
        gotu: ["var(--font-gotu)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
