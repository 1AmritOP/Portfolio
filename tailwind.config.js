/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple': '#4A14B5'
      },
      boxShadow: {
        '3xl': '0 0px 3px 3px #4A14B5',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}