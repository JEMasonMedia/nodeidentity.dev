import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/material'
import { useTheme } from 'next-themes'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export default function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <IconButton color='inherit' aria-label='toggle light/dark mode' onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} edge='start'>
        {resolvedTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  )
}
