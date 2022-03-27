import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { ProviderProps } from '../types';
// import { WEB3_PROVIDER_URL } from '../config';
// import * as bsc from '@binance-chain/bsc-use-wallet'
import { YamProvider, Web3Provider, Web3ModalProvider, GlobalContextProvider } from '../contexts';
import NavBar from '../components/layout/NavBar';
import Drawer from '../components/layout/Drawer';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const Providers = (props: ProviderProps) => {
  return (
    <Web3ModalProvider>
      <ThemeProvider theme={theme}>
        <YamProvider>
          <Web3Provider>
            <GlobalContextProvider>
              <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                {props.children}
              </SnackbarProvider>
            </GlobalContextProvider>
          </Web3Provider>
        </YamProvider>
      </ThemeProvider>
    </Web3ModalProvider>
  )
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Providers {...pageProps}>
        <Box sx={{display: 'flex'}}>
          <CssBaseline />
          <NavBar />
          <Drawer />
          <Component sx={{ flexGrow: 1 }} {...pageProps}/>
        </Box>
      </Providers>
    </CacheProvider>
  );
}
