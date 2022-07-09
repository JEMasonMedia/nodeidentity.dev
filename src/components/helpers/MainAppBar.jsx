import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
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
import Logo from '../../assets/svg/Logo'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

export default function MainAppBar({ showMenu, open, handleDrawer }) {
  const { theme, resolvedTheme, setTheme } = useTheme()

  return (
    <AppBar elevation={0}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', padding: '.75em 1.5em .75em 1.5em', backgroundColor: 'inherit', borderBottom: 1, borderColor: 'grey.900' }}>
        {showMenu && (
          <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawer} edge='start' sx={{ marginRight: 5 }}>
            {open ? theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        )}

        <Link href='/' style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
          <Logo fill='currentColor' fontSize='170' width='40' height='40' />
          <Typography variant='h6' noWrap component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel' }}>
            Node Identity
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '2em' }}>
          <Link href='/libraries' sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle1' noWrap component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel' }}>
              Libraries
            </Typography>
          </Link>
          <Link href='/documentation' sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle1' noWrap component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel' }}>
              Documentation
            </Typography>
          </Link>
          <Link href='/about' sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle1' noWrap component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel' }}>
              About
            </Typography>
          </Link>
          <Link href='/forum' sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle1' noWrap component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel' }}>
              Forum
            </Typography>
          </Link>
        </Box>

        <Box sx={{ marginLeft: 'auto' }}>
          <IconButton color='inherit' aria-label='toggle light/dark mode' onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} edge='start'>
            {resolvedTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  )
}
