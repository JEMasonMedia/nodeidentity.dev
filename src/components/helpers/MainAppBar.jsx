import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useTheme } from 'next-themes'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import Link from './Link'
import Image from 'next/image'
import logoClear from '../../assets/imgs/logoClear.png'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

export default function MainAppBar({ open, handleDrawer }) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <div
        style={{
          minHeight: '162.38px',
        }}></div>
    )

  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawer} edge='start' sx={{ marginRight: 5 }}>
            {open ? theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>

          <Link href='/' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Image src={logoClear} alt='Node Identity Logo' width='40' height='40' />
            <Typography variant='h6' noWrap component='div' style={{ marginLeft: '10px' }}>
              Node Identity
            </Typography>
          </Link>

          <Box sx={{ marginLeft: 'auto' }}>
            <IconButton color='inherit' aria-label='toggle light/dark mode' onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} edge='start'>
              {resolvedTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
