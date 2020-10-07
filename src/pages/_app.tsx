import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Global from '../styles/Global';
import { theme } from '../styles/theme';

const App = ({ Component, pageProps }: any) => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      <Global />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
