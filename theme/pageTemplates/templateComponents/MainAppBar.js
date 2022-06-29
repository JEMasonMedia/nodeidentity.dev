<<<<<<< HEAD:theme/pageTemplates/templateComponents/MainAppBar.js
import { useState, useContext } from 'react'
import { styled, useTheme } from '@mui/material/styles'
=======
import { useState, useMemo, useEffect } from 'react'
import { styled, useTheme, createTheme } from '@mui/material/styles'
>>>>>>> 43faa4df230124f778e57cb16cf8a8f818d9034b:src/pageTemplates/templateComponents/MainAppBar.js
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Link from '../../misc/Link'
import Image from 'next/image'
import logoClear from '../../../assets/imgs/logoClear.png'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { ThemeContext } from '../../themeContext/ThemeContext'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

export default function MainAppBar({ open, handleDrawer }) {
  // const theme = useTheme()
  // const [mode, setMode] = useState('light')

  // console.log(theme.palette.mode)
  // const handleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //   } else {
  //     setMode('light')
  //   }

<<<<<<< HEAD:theme/pageTemplates/templateComponents/MainAppBar.js
  //   theme.palette.mode = mode
  // }
=======
    // theme.palette.mode = mode
  }
>>>>>>> 43faa4df230124f778e57cb16cf8a8f818d9034b:src/pageTemplates/templateComponents/MainAppBar.js

  // const newTheme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: mode,
  //       }
  //     }),
  //   [mode]
  // );

<<<<<<< HEAD:theme/pageTemplates/templateComponents/MainAppBar.js
  const ctx = useContext(ThemeContext)
  const { darkMode, setDarkMode } = ctx
=======
  // useEffect(() => {
  //   return () => {
  //     theme = newTheme
  //   }
  // }, [newTheme, theme])
>>>>>>> 43faa4df230124f778e57cb16cf8a8f818d9034b:src/pageTemplates/templateComponents/MainAppBar.js

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
          <Image src={logoClear} alt='Node Identity Logo' width='40' height='40' />
          <Typography variant='h6' noWrap component='div' style={{ marginLeft: '10px' }}>
            Node Identity
          </Typography>
        </Link>
        <IconButton
          color='inherit'
          aria-label='toggle light/dark mode'
          onClick={() => setDarkMode(darkMode)}
          edge='start'
          sx={{
            marginRight: 5,
          }}>
          <Box style={{ flexGrow: '1' }}>{darkMode ? <DarkModeIcon /> : <LightModeIcon />}</Box>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
