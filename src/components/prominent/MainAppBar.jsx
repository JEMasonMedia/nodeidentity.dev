import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AppBarMenu from './AppBarMenu'
import ThemeSwitcher from './ThemeSwitcher'
import BrandLink from './BrandLink'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

const AppBarBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: '.75em 1.5em .75em 1.5em',
  backgroundColor: 'inherit',
  borderBottom: 1,
  borderColor: 'grey.900',
}))

export default function MainAppBar({ showMenu, open, handleDrawer }) {
  return (
    <AppBar elevation={0}>
      <AppBarBox>
        {showMenu && (
          <IconButton color='inherit' aria-label='open primary drawer' onClick={handleDrawer} edge='start' sx={{ marginRight: 5 }}>
            {open ? theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        )}
        <BrandLink color='inherit' />
        <AppBarMenu />
        <ThemeSwitcher />
      </AppBarBox>
    </AppBar>
  )
}
