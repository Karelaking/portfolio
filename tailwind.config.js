/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      "neue": ["Bebas Neue", "serif"],
      "monoton": ["Monoton", "serif"],
      "roboto": ["Roboto Mono", "serif"]
    },
    extend: {},
  },
  plugins: [],
}

