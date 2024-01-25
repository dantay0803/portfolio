/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B296F',
        secondary: '#F3E9DC',
        accent: '#FB3640',
        'accent-dark': '#717784',
        'white': {
          DEFAULT: '#FFFFFF',
          '100': '#F3F3F3',
          '200': '#E7E7E7',
          '300': '#DADADA',
          '400': '#CFCFCF',
          '500': '#C3C3C3',
          '600': '#B6B6B6',
          '700': '#AAAAAA',
          '800': '#9D9D9D',
          '900': '#919191',
        },
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
