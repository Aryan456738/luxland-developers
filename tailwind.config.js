/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,mjs}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf0',
          100: '#fefab8',
          300: '#f9e478',
          400: '#f4ce43',
          500: '#d9a91c',
          600: '#b58312',
          700: '#8e5e0f',
        },
        emerald: {
          900: '#062c23',
          950: '#021a14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
