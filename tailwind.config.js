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
        "primary-dark": "#CF5F2F",
        "bg-primary": "#FFF3EA",
        "h-dark": "#A98686"
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
