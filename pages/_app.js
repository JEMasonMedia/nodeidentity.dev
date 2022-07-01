import createEmotionCache from '../src/theme/createEmotionCache'
import PageProvider from '../src/components/helpers/PageProvider'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
// import '../holding/misc/global.css'

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  )
}
