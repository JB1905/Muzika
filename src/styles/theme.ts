export const theme = {
  breakpoints: {
    xs: '320px',
    sm: '582px',
    md: '760px',
    lg: '1000px',
    xl: '1100px',
  },
  colors: {
    primary: '#ec445a',
    secondary: '#f78a9e',
    text: '#000',
    textFaded: '#9d9d9d',
    background: '#fdfdfd',
    border: '#eaeaea',
  },
  font: {
    family: {
      body: '-apple-system, "Roboto", sans-serif',
    },
    size: {
      default: '1.6rem',
    },
  },
};

export type ThemeType = typeof theme;
