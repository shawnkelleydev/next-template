import PageWrapper from 'components/PageWrapper'

import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  )
}

export default MyApp
