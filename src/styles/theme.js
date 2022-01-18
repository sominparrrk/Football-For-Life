const size = {
  mobile: '375px',
  tablet: '768px',
  tabletLg: '900px',
  laptop: '1024px',
  laptopLg: '1142px',
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
  tabletLg: `(max-width: ${size.tabletLg})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopLg: `(max-width: ${size.laptopLg})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default theme;
