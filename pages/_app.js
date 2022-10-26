// import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/layouts/appLayout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
