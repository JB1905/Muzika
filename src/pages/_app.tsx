import React from 'react';
import { ThemeProvider } from 'styled-components';

import Global from '../components/Global';

import { theme } from '../constants/theme';

const App = ({ Component, pageProps }: any) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />

    <Global />
  </ThemeProvider>
);

export default App;
