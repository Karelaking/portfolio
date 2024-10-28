/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/pages/**/*.jsx',
    './src/*.css',
    './src/components/**/*.jsx',
    './src/backend/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/svgs/temple.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        SofadiOne: ['SofadiOne', 'sans-serif'],
        DancingScript: ['DancingScript', 'italic'],
        Staatliches: ['Staatliches', 'italic'],
        Righteous: ['Righteous', 'italic'],
      },
    },
    colors: {
      primary: '#DE8245',
      active: '#541A0A',
      secondary: '#FFFAF2',
      white: '#FFFFFF',
      grey: '#D9D0D4',
    },
  },
  plugins: [],
};

