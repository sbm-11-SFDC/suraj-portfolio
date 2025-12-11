/* -------------- tailwind.config.cjs -------------- */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0a4d8c', // corporate blue
        accent: '#0f7bd1'
      }
    }
  },
  plugins: []
}