module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'custom-dark-quiz': '#0a192f',
        'custom-light-quiz': '#516BEB',

        'custom-border-left-note': '#07da07',
        'custom-bg-note': '#2a2f32',
        'custom-bg2-note': '#131c21'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
