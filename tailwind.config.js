/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#66adff",
          medium: "#3172bc",
          dark: "#0c478c",
        },
        secondary: "#28c4ac",
        "body-text": {
          dark: "#2f495e",
          light: "#fafaff",
        },
        "body-color": {
          light: "#fafaff",
          "light-secondary": "#edf2f7",
          dark: "#2f495e",
          "dark-secondary": "#37546d",
        },
      },
    },
  },
  plugins: [],
};
