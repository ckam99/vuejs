const tealColor = '#42b983'
const blackPaletteColors = {
  'black-10': 'rgba(0,0,0,0.1)',
  'black-20': 'rgba(0,0,0,0.2)',
  'black-30': 'rgba(0,0,0,0.3)',
  'black-40': 'rgba(0,0,0,0.4)',
  'black-50': 'rgba(0,0,0,0.5)',
  'white-5': 'rgba(255,255,255,0.05)',
  'white-10': 'rgba(255,255,255,0.1)',
  'white-20': 'rgba(255,255,255,0.2)',
  'white-30': 'rgba(255,255,255,0.3)',
  'white-40': 'rgba(255,255,255,0.4)',
  'white-50': 'rgba(255,255,255,0.5)',
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...blackPaletteColors,
        'teal': tealColor
      },
      borderColor: {
        ...blackPaletteColors,
        'teal': tealColor,
      },
      textColor: {
        ...blackPaletteColors,
        'teal': tealColor,
      },
      ringColor: {
        ...blackPaletteColors,
        'teal': tealColor,
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}