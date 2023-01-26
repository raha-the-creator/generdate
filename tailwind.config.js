/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ["'Roboto Mono'", 'monospace'],
        'archivo': ["Archivo", 'sans-serif']
      }
    },
  },
  plugins: [],
}
