/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./images/hero_bg.png')",
        runLine: "url('./images/running-line.png')",
        about: "url('./images/about-2.jpg')",
        certificate: "url('./images/certificate.png')",
        whillTicket: "url('./images/road_ticket.png')",
        rideSummer: "url(./images/for-video-summer.png)",
        rideWinter: "url(./images/for-video-winter.png)",
        rideSnowbike: "url(./images/snowmobile.png)",
        sertificateImage: "url(./images/sert_bg.png)"

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
