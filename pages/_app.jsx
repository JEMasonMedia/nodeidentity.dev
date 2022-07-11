import { useState, useEffect } from 'react'
import createEmotionCache from '../src/theme/createEmotionCache'
import PageProvider from '../src/components/helpers/PageProvider'
import '../public/css/global.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const [mounted, setMounted] = useState(false)
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <div
        style={{
          // minHeight: '162.38px',
          minHeight: '100vh',
          // backgroundColor: 'black',
        }}></div>
    )

  return (
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  )
}
