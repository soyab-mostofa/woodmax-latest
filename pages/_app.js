import { ApolloProvider } from '@apollo/client';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/widgets/Footer';
import Header from '../components/widgets/Header';
import client from '../features/Apollo';
import '../styles/globals.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Woodmax Decor</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="best furniture for dream space" />
        </Head>
        <Header />
        <main style={{ paddingTop: '80px' }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
