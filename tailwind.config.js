/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9916C",
        "primary-light": "#EEAC90",
        "primary-dark": "#CF5F2F",
        "backgound-primary": "#FFF3EA",
        "header-dark": "#A98686"
      },
      fontFamily: {
        noto: ["Noto Serif", "sans-serif"],
        nunito: ["Open Sans", "open-sans"],
        nunito: ["Nunito Sans", "sans-serif"],
        nunito: ["Noto Sans", "noto-sans"],
      },
    },
  },
  plugins: [],
}
