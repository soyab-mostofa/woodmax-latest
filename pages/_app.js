import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/widgets/Footer';
import Header from '../components/widgets/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
