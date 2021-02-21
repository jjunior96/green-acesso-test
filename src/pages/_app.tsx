import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Green Acesso</title>
        <link rel="shorcut icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Green Acesso" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
