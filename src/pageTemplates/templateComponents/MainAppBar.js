import { useState, useMemo, useEffect } from 'react'
import { styled, useTheme, createTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Link from '../../Link'
import Image from 'next/image'
import logo from '../../../public/imgs/logo.png'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

export default function MainAppBar({ open, handleDrawer }) {
  const theme = useTheme()
  const [mode, setMode] = useState('light')

  // console.log(theme.palette.mode)
  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }

    // theme.palette.mode = mode
  }

  // const newTheme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: mode,
  //       }
  //     }),
  //   [mode]
  // );

  // useEffect(() => {
  //   return () => {
  //     theme = newTheme
  //   }
  // }, [newTheme, theme])

  return (
    <AppBar sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawer}
          edge='start'
          sx={{
            marginRight: 5,
          }}>
          {open ? theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Link href='/' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <Image src={logo} alt='Node Identity Logo' width='40' height='40' />
          <Typography variant='h6' noWrap component='div' style={{ marginLeft: '10px' }}>
            Node Identity
          </Typography>
        </Link>
        <IconButton
          color='inherit'
          aria-label='toggle light/dark mode'
          onClick={handleMode}
          edge='start'
          sx={{
            marginRight: 5,
          }}>
          {theme.palette.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
