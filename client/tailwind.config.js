/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'helmets': "linear-gradient(180deg, rgba(15, 8, 47, 1), rgba(8, 30, 139, 0.23), rgba(15, 8, 47, 1)), url('../public/helmets.png')",
      'field-sec': "linear-gradient(180deg, rgba(15, 8, 47, 1), rgba(8, 30, 139, 0.23), rgba(15, 8, 47, 1)), url('../public/fieldsec.png')",
      'impact-field': "linear-gradient(180deg, rgba(15, 8, 47, 1), rgba(8, 30, 139, 0.23), rgba(15, 8, 47, 1)), url('../public/impact_field.png')",
      "game-day": "linear-gradient(180deg, rgba(15, 8, 47, 1), rgba(8, 30, 139, 0), rgba(15, 8, 47, 1)), url('../public/game_day.png')",
    },
  },
  plugins: [],
}

