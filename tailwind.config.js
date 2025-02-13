module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust paths to your project structure
  theme: {
    extend: {
      colors: {
        sectionGray: '#53555B',
        Onhover: '#D9AF5B',
        blueLink: '#00B2FF',
      },
      fontFamily: {
        // fontRoboto: ["Roboto", "serif"],
      },
      backgroundImage: {
        'winmatchInfo': "url('/assets/images/rupee_bg.png')",
      },
      backgroundSize: {
        '50': '50%',
      },
      width: {
        fullOccupied: '-webkit-fill-available',
      },
      screens: {
        'Tab': '820px',
        'xl': '1280px',
        'mob': '480px',
        'basemobile': '390px',
      },
    },
  },
  plugins: [
    require('postcss'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}