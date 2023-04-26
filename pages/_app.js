// import "../styles/globals.css";

import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import AppLayout from '../components/layouts/AppLayout'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <AppLayout>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} />
                </AnimatePresence>
            </AppLayout>
        </ChakraProvider>
    )
}

export default MyApp
