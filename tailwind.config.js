/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-3': "url('https://i.ibb.co.com/s1T8krw/banner-3.jpg')",
        'banner-2': "url('https://i.ibb.co.com/BCHQ66M/banner-2.png')",
      }
    },
  },
  plugins: [require('daisyui'),],
}