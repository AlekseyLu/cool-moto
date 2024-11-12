/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./images/hero.jpg')",
        runLine: "url('./images/running-line.png')",
        about: "url('./images/about.jpg')",
        sertificate: "url('./images/background_ticket.png')",
        whillTicket: "url('./images/road_ticket.png')",
      },
      backgroundPosition: {
        'center-top': 'center top',
        'left-center': 'left center',
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
