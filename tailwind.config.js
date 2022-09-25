/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '35': "35px"
      },
      colors: {
        gray33: "#333"
      }
    },
  },
  plugins: [],
}
