/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco' : "url('/public/css/img/chicago.jpg')",
        'sanFranciscoDesktop': "url('/public/css/img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('/public/css/img/yosemite.jpg')",
        'LA': "url('/public/css/img/LA.jpg')",
        'seattle': "url('/public/css/img/seattle.jpg')",
        'new_york': "url('/public/css/img/new_york.jpg')",
        'norway': "url('/public/css/img/norway.jpg')",
        'sydney': "url('/public/css/img/sydney.jpg')",
        'miami': "url('/public/css/img/miami.jpg')",
        'switzerland': "url('/public/css/img/switzerland.jpg')",
        'bali': "url('/public/css/img/bali.jpg')",
        'norway': "url('/public/css/img/norway.jpg')",
        'chicago': "url('./public/css/img/chicago.jpg')",
        'europe': "url('/public/css/img/europe.jpg')",
        'iceland': "url('/public/css/img/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor : {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      },
      fontFamily : {
        Montserrat : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

