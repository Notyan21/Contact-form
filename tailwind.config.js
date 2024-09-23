/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {

        "green-200-lighter": "hsl(148, 38%, 91%)",
        "green-600-medium": "hsl(169, 82%, 27%)",
        "red": "hsl(0, 66%, 54%)",
        "white": "hsl(0, 0%, 100%)",
        "grey-500-medium": "hsl(186, 15%, 59%)",
        "grey-900-darker": "hsl(187, 24%, 22%)",

      },

      fontFamily: {
        "karla": ["Karla", "sans-serif"]
      }


    },
  },
  plugins: [],
}

