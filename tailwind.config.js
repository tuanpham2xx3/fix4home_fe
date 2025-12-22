/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      colors: {
        primary: "#F5E71F",
        secondary: "#1e5c2b",
        dark: "#1A1A1A",
        light: "#F9F9F9",
        muted: "#666666",
      },
      fontFamily: {
        sans: ["BeVietnamPro", "sans-serif"],
        heading: ["BeVietnamPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
