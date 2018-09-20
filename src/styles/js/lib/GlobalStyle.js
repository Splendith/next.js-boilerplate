import { createGlobalStyle } from 'styled-components';
import Kanit from '~/static/fonts/Kanit-Light.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Kanit";
    src: url(${Kanit});
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Kanit";
    font-weight: normal;
  }
`;

export default GlobalStyle;
