const size = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
};

const theme = {
  // color
  white: '#FFFFFF',
  black: '#242424',
  gray: '#76766F',
  mainLight: '#D9F7F5',
  mainDefault: '#00CDBC',

  // breakpoint
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default theme;
