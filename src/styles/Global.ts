import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const Global = createGlobalStyle<{ theme: ThemeType }>`
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
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }
`;

export default Global;
