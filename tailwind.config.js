const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './posts/**/*.{js,mdx}',
    './components/**/*.js',
    './pages/**/*.js',
    './containers/**/*.js',
    './next.config.js',
  ],
  // purge: {
  //   mode: 'all',
  //   content: [],
  //   options: {
  //     whitelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong' /* etc. */],
  //   },
  // },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        violet: colors.violet,
        dim: '#17202A',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        blog: '0 30px 60px -10px rgba(0,0,0,.3), 0 18px 36px -18px rgba(0,0,0,.33)',
        ['blog-sm']:
          '0 35px 65px -10px rgba(0,0,0,.3), 0 23px 41px -18px rgba(0,0,0,.33)',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.100'),
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            h5: {
              color: theme('colors.gray.100'),
            },
            h6: {
              color: theme('colors.gray.100'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
    require('@tailwindcss/aspect-ratio'),
  ],
};
