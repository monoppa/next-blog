module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': 'off', // Checks effect dependencies
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
