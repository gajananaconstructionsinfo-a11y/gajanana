/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sgc: {
          charcoal: '#0f172a',
          concrete: '#f8fafc',
          concreteAlt: '#f1f5f9',
          amber: '#f59e0b',
          amberDark: '#d97706',
          amberDeep: '#b45309'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
