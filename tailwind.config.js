export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        youtube: {
          red: "#FF0000",
          dark: "#FFFFFF",
          light: "#F9F9F9",
          gray: "#E5E5E5",
          text: "#0F0F0F",
        },
      },
      fontFamily: {
        youtube: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
