import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: ${({ theme }) => theme.font.family.body};
    background-color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.font.size.default};
    color: ${({ theme }) => theme.colors.text};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Global;
