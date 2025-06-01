/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-3': "url('https://i.ibb.co/qYVbY9vM/depositphotos-102750706-stock-illustration-flat-line-design-website-banner.jpg')",
        'banner-2': "url('https://i.ibb.co.com/BCHQ66M/banner-2.png')",
      }
    },
  },
  plugins: [require('daisyui'),],
}