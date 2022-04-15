const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    darkMode: 'class',
    colors: {
      'theme-800': '#161b21', //dark theme
      'theme-700': '#212933', //dark theme
      'theme-600': '#323e4c', //dark theme
      'theme-500': '#455364', //light theme
      'theme-400': '#536780', //light theme
      'theme-300': '#9ea7b3', //light theme
      'theme-200': '#dde4ec', //light theme
      'theme-100': '#ffffff', //dark theme
      'theme-orange': '#ff5850', //both
      'theme-blue': '#00a7af' //both
    },
    fontFamily: {
      'body': ['Space Mono', 'monospace']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}