import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";

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
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
