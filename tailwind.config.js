/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,vue,css,scss}', './index.html'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors: {
        accentMain: '#000000',
        accentShade: '#101010',
        accentTintStart: '#4A58D4',
        accentTintEnd: '#7D4CA4',
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
