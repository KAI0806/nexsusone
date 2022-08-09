import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>株式会社Nexsusone</title>
      </Head>

      <header></header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  )
}

export default MyApp;
