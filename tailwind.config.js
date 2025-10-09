/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mountain-green': '#2D6A4F',
        'mountain-green-light': '#40916C',
        'fog-gray': '#D8D8D8',
        'fog-gray-dark': '#9E9E9E',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}