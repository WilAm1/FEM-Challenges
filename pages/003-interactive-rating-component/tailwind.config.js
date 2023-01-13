/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.{html,css}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        lightGray: "hsl(217, 12%, 63%)",
        mediumGray: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
