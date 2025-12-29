/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'inter' : ['Inter']
    },
    extend: {
      clipPath: {
        triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        circle: 'circle(50% at 50% 50%)',
      },
    },
  },
  plugins: [],
}
