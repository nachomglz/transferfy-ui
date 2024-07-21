/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        background: {
          light: "#f7f9fc",
          dark: "#000",
          DEFAULT: "#fff",
          lightHover: "#f1f5f9",
        },
        foreground: {
          light: "#64738B",
          dark: "#fff",
          DEFAULT: "#000",
          lightHover: "#020817",
        },

        title: {
          light: "#020817",
          dark: "#fff",
          DEFAULT: "#fff",
        },
        border: {
          light: "#e2e8f0",
          dark: "",
          DEFAULT: "#000",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
