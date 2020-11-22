const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './posts/**/*.{js,mdx}',
      './components/**/*.js',
      './pages/**/*.js',
      './containers/**/*.js',
      './next.config.js',
    ],
    options: {
      whitelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong' /* etc. */],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        violet: colors.violet,
        dim: '#17202A',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        blog:
          '0 30px 60px -10px rgba(0,0,0,.3), 0 18px 36px -18px rgba(0,0,0,.33)',
        ['blog-sm']:
          '0 35px 65px -10px rgba(0,0,0,.3), 0 23px 41px -18px rgba(0,0,0,.33)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
