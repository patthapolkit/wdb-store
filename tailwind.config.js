import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBFFE7",
          100: "#F6FCC3",
          300: "#E5F96E",
          400: "#DFF547",
          700: "#C1CD00",
          base: "#DEF81C",
        },
        secondary: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          300: "#E1E1E1",
          500: "#9F9F9F",
          700: "#626262",
          base: "#222222",
        },
        success: "#13CE66",
        info: "#3366FF",
        Warning: "#FFB020",
        danger: "#FF000D",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    theme: false,
    base: false,
    darkTheme: "light",
  },
};
