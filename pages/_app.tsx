import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Jake Cannon</title>
      </Head>
      <nav>
        <Link href="/">/home</Link>
        <Link href="/algorithms">/algorithms</Link>
        <Link href="/patterns">patterns</Link>
      </nav>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
