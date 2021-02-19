export default {
  grid: {
    container: '140rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '1.2rem'
  },
  box: {
    shadow: '0 8px 8px #eee'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#15bf52',
    secondary: '#f1f2f7',
    buttonSearch: '#79dab6',
    primaryTitle: '#2f445e',
    secundaryTitle: '#eea258',
    otherTitle: '#6363df',
    purple: '#a1a1f8',
    darkText: '#293e59',
    white: '#fff',
    lightGray: '#F1F2F0',
    mediumGray: '#4e6177',
    black: '#070707'
  },
  spacings: {
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  }
} as const;
