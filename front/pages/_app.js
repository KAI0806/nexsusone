import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header></header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  )
}

export default MyApp
