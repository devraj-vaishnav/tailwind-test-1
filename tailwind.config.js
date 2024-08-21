/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      fontFamily:{
        playfair:"' Palyfair Display', serif",
        leto:"' Lato', sans-serif",
      }
    },
  },
  plugins: [],
}