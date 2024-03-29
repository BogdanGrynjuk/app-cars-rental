const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const theme = Object.freeze({
  colors: {
    black: 'rgba(18, 20, 23, 1)',
    white: 'rgba(255, 255, 255, 1)',
    lighteGrey: 'rgba(138, 138, 137, 0.2)',
    secondaryGrey: 'rgba(18, 20, 23, 0.5)',
    grey: 'rgb(138, 138, 137, 1)',
    greyForBgInput: 'rgba(247, 247, 251, 1)',
    greyForSelectInput: 'rgba(18, 20, 23, 0.2)',
    lighteBlue: 'rgba(52, 112, 255, 1)',
    blue: 'rgba(11, 68, 205, 1)',
  },

  fontFamily: {
    manrope: 'Manrope, sans-serif',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '36px',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    large: '2px solid',
  },

  mq: {
    mobile: `min-width: ${breakpoints.mobile}`,
    tablet: `min-width: ${breakpoints.tablet}`,
    desktop: `min-width: ${breakpoints.desktop}`,
  },

  radii: {
    normal: '12px',
    large: '14px',
  },
});
