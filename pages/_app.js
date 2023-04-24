import '@/styles/globals.css'
import Context from '@/context/context'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Context>
  )
}
