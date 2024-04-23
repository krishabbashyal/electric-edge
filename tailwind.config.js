/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "elecDark":"#14171C",
        "elecGray":"#161821",
        "elecCyan":"#3D7761",
        "elecRed":"#BC6659",
        "elecGold":"#DAB350",
      }
    },
  },
  plugins: [],
}
