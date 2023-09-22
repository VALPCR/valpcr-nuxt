/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
          'dark-blue': '#172554',
          'blue': '#1890FF',
          'green': '#30AD62',
          'yellow': '#F7B928',
          'dark-1': '#111827', /** Used Mainly in Text */
          'dark-2': '#131A2D',
          'light-1': '#EFEFEF', /** Used Mainly in Background */
          'light-2': '#F3F6F9',
          'light-3': '#F6FAFE'
      }
    },
    fontFamily:'Roboto' 
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs", require("flowbite/plugin"))],
};
