/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./images/hero.jpg')",
        runLine: "url('./images/running-line.png')",
      },
      backgroundPosition: {
        'center-top': 'center top',
      },
      animation: {
        wiggle: "wiggle 4s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
