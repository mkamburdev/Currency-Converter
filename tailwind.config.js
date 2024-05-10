/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        thasadith: ["Thasadith", "sans-serif"],
      },
    },
  },
  plugins: [],
}