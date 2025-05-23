/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
         400: '#7a67f9', 
          500: '#5c49f7', 
          600: '#4838d9', 
          700: '#3528bb', }
        },
    },
  },
  plugins: [],
};
