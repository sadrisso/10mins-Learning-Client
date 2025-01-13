/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://i.ibb.co.com/YN1kNjZ/banner.webp')",
        'banner-1': "url('https://i.ibb.co.com/YXxJ5hC/banner-1.jpg')",
        'banner-2': "url('https://i.ibb.co.com/BCHQ66M/banner-2.png')",
      }
    },
  },
  plugins: [require('daisyui'),],
}