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
        '4.75ls': '0.29685em'
      }
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'Helvetica', 'Arial', 'sans-serif'],
      'barlow': ['"Barlow Condensed"'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
