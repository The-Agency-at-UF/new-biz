/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'helmets': "url('../public/helmets.png')",
    },
  },
  plugins: [],
}

