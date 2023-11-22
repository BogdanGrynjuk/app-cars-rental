export const theme = Object.freeze({
  colors: {
    black: 'rgba(18, 20, 23, 1)',
    white: 'rgba(255, 255, 255, 1)',
    liteGrey: 'rgba(138, 138, 137, 0.2)',
    grey: 'rgba(138, 138, 137, 1)',
    greyForBgInput: 'rgba(247, 247, 251, 1)',
    greyForSelectInput: 'rgba(18, 20, 23, 0.2)',
    liteBlue: 'rgba(52, 112, 255, 1)',
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
  },

  //Радіус для бордера, приклад border-radius: ${p => p.theme.radii.normal};
  radii: {
    normal: '12px',
  },
});
