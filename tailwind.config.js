/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'archivo': ['Archivo', 'sans-serif'],
        'montserrat': ["Montserrat",'sans-serif']
      },
      backgroundImage: {
        'card-bg': "url('./recroom-hero.jpg')",
        'hero-test': "url('https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2016-10/0%20HERO_HoustonTX_GettyImages-532390052_0.jpg?h=c5520b1b&itok=QYZzO_gS')"
      },
      flexGrow: {
        1: '1',
        2: '2'
      }
    },
  },
  plugins: [],
}
