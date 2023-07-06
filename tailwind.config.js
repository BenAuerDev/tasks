const formkitTailwind = require('@formkit/themes/tailwindcss')

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    formkitTailwind
  ],
}

