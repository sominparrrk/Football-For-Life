import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: fit-content;
    margin: 0;
    padding: 0;
    font-family: 'Outfit', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
