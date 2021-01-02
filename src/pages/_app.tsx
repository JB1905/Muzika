import { ThemeProvider } from 'styled-components';
import { Provider } from 'next-auth/client';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import Global from '../styles/Global';
import { theme } from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider session={pageProps.session}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <Global />
      </ThemeProvider>
    </RecoilRoot>
  </Provider>
);

export default App;
