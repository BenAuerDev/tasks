const formkitTailwind = require('@formkit/themes/tailwindcss')

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
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

