import { CacheProvider } from '@emotion/react'
import { ThemeProvider as PreferredThemeProvider } from 'next-themes'
import Head from 'next/head'

import MUIThemeProvider from './MUIThemeProvider'
import DefaultPageScaffold from './DefaultPageScaffold'

const PageProvider = ({ children, emotionCache = clientSideEmotionCache }) => (
  <PreferredThemeProvider>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <MUIThemeProvider>
        <DefaultPageScaffold>{children}</DefaultPageScaffold>
      </MUIThemeProvider>
    </CacheProvider>
  </PreferredThemeProvider>
)

export default PageProvider
