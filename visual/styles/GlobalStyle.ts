import { createGlobalStyle } from 'styled-components';

import { COLORS } from '../constants';
import { Ubuntu } from '../fonts';

export const GlobalStyle = createGlobalStyle`
  ${Ubuntu}

  html {
    min-height: 100vh;
    background-color: ${COLORS.dark};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
