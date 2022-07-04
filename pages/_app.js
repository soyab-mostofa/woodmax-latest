import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/widgets/Footer';
import Header from '../components/widgets/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Woodmax Decor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="best furniture for dream space" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
