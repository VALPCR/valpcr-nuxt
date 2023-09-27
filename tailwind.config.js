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
      /** Colors: Tailwind default colors
            slate - 100, 300 For 'Clear' button
            green - 600, 700 For 'Add New' button
            amber - 500, 600 For 'Export' button
      */
          'dark-blue': '#172554',
          'blue': '#1890FF',
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
