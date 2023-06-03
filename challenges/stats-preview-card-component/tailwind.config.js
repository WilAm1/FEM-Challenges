/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
console.log(defaultTheme.fontSize);

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontSize: {
      base: ["15px", ...defaultTheme.fontSize],
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkDesaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        slightlyTransparentWhite2: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        lexendDeca: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
