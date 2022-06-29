import { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../theme/misc/createEmotionCache'
import '../theme/misc/global.css'

import { ThemeContextProvider } from '../theme/themeContext/ThemeContext'
import { ThemeContext } from '../theme/themeContext/ThemeContext'
import PrimaryTemplate from '../theme/pageTemplates/PrimaryTemplate'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // const ctx = useContext(ThemeContext)
  // const { darkMode, setDarkMode } = ctx

  // useEffect(() => {
  //   console.log(darkMode)
  // }, [darkMode])

  // useEffect(() => {
  //   const theme = localStorage.getItem('NI-theme')
  //   if (theme) {
  //     if (theme === 'dark') {
  //       setDarkMode(true)
  //     } else {
  //       setDarkMode(false)
  //     }
  //   } else {
  //     localStorage.setItem('NI-theme', 'light')
  //     setDarkMode(true)
  //   }
  // }, [darkMode, setDarkMode])

  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <ThemeContextProvider>
        <PrimaryTemplate>
          <Component {...pageProps} />
        </PrimaryTemplate>
      </ThemeContextProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

{
  /* <ThemeProvider theme={theme}>
<CssBaseline />
<PrimaryTemplate>
  <Component {...pageProps} />
</PrimaryTemplate>
</ThemeProvider> */
}
