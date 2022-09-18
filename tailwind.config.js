/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        yellow: {
          200: "#FFCA51",
          300: "#FEBF2D",
          400: "#FDB819"
        },
        black: {
          200: "#1D1D1D",
          300: "#141414",
          900: "#000000"
        },
        gray: {
          100: "#F5F5F5",
          200: "#E2E2E2",
          300: "#CBCBCB",
          400: "#9B9B9B",
        },
        blue: {
        800: "#293C52"
        }
      },
    },
  },
  plugins: [],
}
