/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE480D',
        'secondary': '#1877F2',
      },
      fontFamily: {
        'sf': 'SF Pro Display'
      }
    },
  },
  plugins: [],
}