import { CacheProvider } from '@emotion/react'
import { ThemeProvider as PreferredThemeProvider } from 'next-themes'
import Head from 'next/head'
import MUIThemeProvider from './MUIThemeProvider'
import Script from 'next/script'

const PageProvider = ({ children, emotionCache }) => (
  <PreferredThemeProvider defaultTheme='system'>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </CacheProvider>
  </PreferredThemeProvider>
)

export default PageProvider
