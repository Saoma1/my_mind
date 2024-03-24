/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
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
