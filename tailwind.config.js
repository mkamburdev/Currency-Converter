/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}