/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#be0000',
        'secondary': '#ffffff',
        'tertiary': '#e70000'
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.primary')}, ${theme('colors.secondary')})`,
      }),
    },
  },
  plugins: [],
}

