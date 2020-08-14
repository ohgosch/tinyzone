import GlobalStyle from '../visual/styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
