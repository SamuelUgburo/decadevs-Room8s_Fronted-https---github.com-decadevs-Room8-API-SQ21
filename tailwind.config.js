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
        notosans: ["Noto Sans", 'sans-serif'],
        outfit: ["Outfit", 'sans-serif']
        // Add more custom font families as needed
      },
      colors: {
        'pry-color': '#7FDBCA', // Add your custom green color
        customTeal: '#7fdbca',
        customGray: '#98A2B3',
        customgray800: '#212121',
        customgray900: '#101828'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out',
        slideOut: 'slideOut 0.3s ease-in-out',
      },
      },
  },
  plugins: [],
}