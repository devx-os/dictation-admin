/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
    require('tailwindcss-fluid-type'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
