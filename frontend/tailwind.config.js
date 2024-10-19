/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        blues:{
          100 : "#1351D8",
          200 : "#163F95"
        }
      }
    },
  },
  variants: {},
  plugins: [],
};
