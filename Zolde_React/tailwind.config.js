/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        overlay: 'rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        primary: "url('./src/assets/parkinglot.png')"
      }
    },
  },
  plugins: [],
}

