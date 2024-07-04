/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call, no-undef
const { nextui } = require('@nextui-org/react');

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1360px',
      xl: '1920px',
    },
    extend: {
      colors: {
        app: '#0E1217',
        // default: '#1A202C',
        // primary: '#0070f3',
        // secondary: '#ff0080',
        // accent: '#00ff00',
      },
      with: {
        'screen-desktop': '100vw',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        340: '85rem',
      },
    },
  },
  // darkMode: 'class',
  plugins: [
    nextui({
      fontSize: {
        tiny: '0.75rem', // text-tiny
        small: '0.875rem', // text-small
        medium: '1rem', // text-medium
        large: '1.125rem',
      },
    }),
  ],
};
