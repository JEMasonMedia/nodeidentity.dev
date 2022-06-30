import PageProvider from '../src/components/helpers/PageProvider'
import { EmotionCache } from '@emotion/react'
// import '../holding/misc/global.css'

export default function App({ Component, emotionCache = EmotionCache, pageProps }) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  )
}
