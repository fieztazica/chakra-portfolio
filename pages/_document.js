import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <ColorModeScript initialColorMode="system" />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
