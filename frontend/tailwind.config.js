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
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#01ADEE",
          200: "#005AFF"
        }
      },
      animation: {
        "slide-in": "slideIn 0.3s ease-out forwards",
        "fade-in-slide-down": "fadeInSlideDown 0.5s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeInSlideDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }
    },
  },
  variants: {},
  plugins: [],
};
