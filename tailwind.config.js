/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oxygen: ["Oxygen", "sans-serif"],
        Figtree: ["Figtree", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
        // Add more custom font families as needed
      },
      colors: {
        'pry-color': '#7FDBCA', // Add your custom green color
        customTeal: '#7fdbca',
        customGray: '#98A2B3',
        customgray800: '#212121',
        customgray900: '#101828'
      },
      width: {
        'custom-998': '998px',
        'custom-900': '900px',
      },
      },
  },
  plugins: [],
}