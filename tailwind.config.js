/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyblue: '#c8d9e6',  
        navy: '#2f4156', 
        beige: '#fff9f2', 
        teal: '#567c8d',  
      },
    },
  },
  plugins: [],
}