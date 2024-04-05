/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    screens: {
      'LaptopL': {max: '1440px'},
      'laptop': {max: '1024px'},
      'Tablet': {max: '768px'},
      'MobileL': {max: '425px'},
      'MobileM': {max: '375px'},
      'MobileS': {max: '320px'}
    },
    extend: {
      colors: {
        primaryCyan: 'hsl(180, 66%, 49%)',
        primaryViolet: 'hsl(257, 27%, 26%)',

        secondaryRed: 'hsl(0, 87%, 67%)',

        tertiaryGray: 'hsl(0, 0%, 75%)',
        tertiaryGrayishViolet: 'hsl(257, 7%, 63%)',
        tertiaryDarkBlue: 'hsl(255, 11%, 22%)',
        tertiarydarkViolet: 'hsl(260, 8%, 14%)'
      },
      fontSize: {
        bodyFont: '18px'
      }
    },
  },
  plugins: [],
}