import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.50,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif']
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()
