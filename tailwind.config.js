/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,vue,css,scss}', './index.html'],
  plugins: [require('daisyui')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accentMain: '#000000',
        accentShade: '#101010',
        accentTintStart: '#6672DB',
        accentTintEnd: '#B396CF',
        neutralMain: '#EEEEEE',
        neutralShade: '#CACACA',
      },
      borderRadius: {
        sm: '10px',
        md: '15px',
        xl: '25px',
      },
    },
  },
  daisyui: {
    prefix: 'd-',
    themes: false,
  },
};
