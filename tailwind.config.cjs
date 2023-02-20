/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],



  theme: {
    extend: {
      colors: {
        'custom-blue': '#080357',
      },
    },
  },
  plugins: [],
}



