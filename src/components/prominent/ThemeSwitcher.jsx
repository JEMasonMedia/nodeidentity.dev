import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/material'
import { useTheme } from 'next-themes'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Head from 'next/head'

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
  let [isSystemDarkTheme, setIsSystemDarkTheme] = useState(getCurrentTheme())
  const mqListener = e => {
    setIsSystemDarkTheme(e.matches)
  }

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', mqListener)
    return () => mql.removeEventListener('change', mqListener)
  }, [])

  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <Head>
        <link rel='shortcut icon' id='favicon' href={`/favicon-${isSystemDarkTheme ? 'light' : 'dark'}.ico`} />
      </Head>

      <IconButton color='inherit' aria-label='toggle light/dark mode' onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} edge='start'>
        {resolvedTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  )
}
