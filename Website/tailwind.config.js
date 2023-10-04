/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        f1: ["Poppins", "sans-serif"],
      },
      colors: {
        clifford: '#da373d',
      }
    },
  },
  plugins: [],
}

