module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'sm-base': ['0.9375rem'],
        '1xxl': ['5em'],
        '2xxl': ['9.375em'],
      },
      letterSpacing: {
        '2.7ls': '0.16875em',
        '2.36ls': '0.1475em',
        '4.75ls': '0.29685em'
      },
      height: {
        '532': '33.25em'
      },

      width: {
        '515': '32.1875em'
      }
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'Helvetica', 'Arial', 'sans-serif'],
      'barlow': ['"Barlow"'],
      'barlow-condensed': ['"Barlow Condensed"'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
