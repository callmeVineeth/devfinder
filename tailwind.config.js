/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,cjs,mjs,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      borderWidth: {
        '5': '5px',
      },
      screens: {
        'sm': '640px',  // Custom breakpoint for small screens
        'md': '768px',  // Custom breakpoint for medium screens
        'lg': '1024px', // Custom breakpoint for large screens
        'xl': '1280px', // Custom breakpoint for extra-large screens
      },
    },
  },
  plugins: [],
}

