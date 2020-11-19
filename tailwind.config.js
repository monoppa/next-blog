const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './containers/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dim: '#17202A',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
