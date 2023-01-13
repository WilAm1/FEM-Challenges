/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sansSerif: ["Montserrat", "Arial", "sans"],
        sans: ["Fraunces", "Times New Roman", "sans-serif"],
      },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
