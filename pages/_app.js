import createEmotionCache from '../holding/misc/createEmotionCache'
import PageProvider from '../src/components/helpers/PageProvider'
import '../holding/misc/global.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  )
}
