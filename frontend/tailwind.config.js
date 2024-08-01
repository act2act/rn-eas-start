/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#161622",
        "button": {
          "primary": "#1E1E2D",
          "secondary": "#039BE6",
          "stroke": "#232533"
        }
      }
    },
  },
  plugins: [],
}

