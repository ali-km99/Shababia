/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Tajawal: ['Tajawal'],
        cairo: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        Rounds: "url('../assets/Rounds.svg')",
        footer: "url('../assets/footerBG.png')",
        footer2: "url('../assets/footerBG2.png')",
      },
      colors: {
        primary: '#832BC1', // Replace with your desired color
      },
    },
  },
  plugins: [],
}
