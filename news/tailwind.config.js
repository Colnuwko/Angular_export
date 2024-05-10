/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        'Popins': ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      bg: "#fafafa",
      white: "#ffffff",
      black: "#000000",
      blue: "#1e418d",
      grey: "#606060",
      orange: "#FF6633",
    }
  },
  plugins: [],
}

