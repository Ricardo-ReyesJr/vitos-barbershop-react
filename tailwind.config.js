/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#08131C',
        'bg-secondary': '#0C0B0B',
        'bg-third': '#605431',
        'bg-forth': '#F4E0B9',
      }
    },
  },
  plugins: [],
}

