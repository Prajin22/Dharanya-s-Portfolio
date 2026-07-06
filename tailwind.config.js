export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#F8F6FC',
          100: '#F0ECF8',
          200: '#E2DAF0',
          300: '#CBBDE2',
          400: '#AE9BD1',
          500: '#9379BE',
          600: '#7A5FA6',
          700: '#654E89',
          800: '#524070',
          900: '#3E3054'
        },
        cream: {
          50: '#FCFAF5',
          100: '#F8F3E9',
          200: '#F0E8D8',
          300: '#E6DAC2'
        },
        charcoal: {
          DEFAULT: '#28242E',
          soft: '#4C4656',
          mute: '#716A7E',
          deep: '#1B1820'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px -18px rgba(147, 121, 190, 0.25)',
        card: '0 16px 48px -16px rgba(147, 121, 190, 0.3)',
        lift: '0 34px 80px -24px rgba(147, 121, 190, 0.45)',
        glow: '0 0 60px 0 rgba(174, 155, 209, 0.35)'
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
}
