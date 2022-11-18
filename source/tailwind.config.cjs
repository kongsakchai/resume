/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#252D2F",
        "primary": "#333333",
        "second": "#737373",
        "chip":"#d9d9d9"
      },
      fontFamily: {
        "ibm": "IBM Plex Mono"
      },
      fontSize: {
        "head": "42px",
        "body": "12px",
        "head-second": "14px",
        "topic": "18px",
      }
    },
  },
  plugins: [],
}
