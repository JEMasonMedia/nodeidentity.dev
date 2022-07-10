import { forwardRef, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Link from '../helpers/Link'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AppBarLink from './AppBarLink'
import BrandLink from './BrandLink'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const AppBarMenuContent = ({ orientation }) => {
  const sx = {
    left: {
      display: 'flex',
      flexDirection: orientation,
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      flexDirection: orientation,
      alignItems: 'center',
      marginLeft: 'auto',
    },
    link: {
      fontSize: null,
    },
  }

  if (orientation === 'column') {
    sx.left.marginTop = '1em'
    sx.right.marginLeft = 'none'
    sx.link.fontSize = '1.5em'
  }

  return (
    <>
      <Box sx={sx.left}>
        <AppBarLink to='/libraries' text='Libraries' sx={sx.link} />
        <AppBarLink to='/about' text='About' sx={sx.link} />
        <AppBarLink to='/documentation' text='Documentation' sx={sx.link} />
        <AppBarLink to='/forum' text='Forum' sx={sx.link} />
      </Box>
      {sx.link.fontSize && <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />}
      <Box sx={sx.right}>
        <AppBarLink to='#' text='Profile' sx={sx.link} />
        <AppBarLink to='#' text='Logout' sx={sx.link} />
      </Box>
    </>
  )
}

export default function AppBarMenu() {
  const matches = useMediaQuery('(max-width:899px)')
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const propagateHandleClose = e => {
    if (open) handleClose()
  }

  return (
    <Box onClick={() => propagateHandleClose()} sx={{ display: 'flex', alignItems: 'center', marginLeft: '2em', marginRight: '2em', flexGrow: '1' }}>
      {matches ? (
        <IconButton color='inherit' aria-label='open app bar menu drawer' onClick={handleClickOpen} edge='start' sx={{ marginLeft: 'auto' }}>
          <MenuIcon />
        </IconButton>
      ) : (
        <AppBarMenuContent orientation='row' />
      )}
      {open && (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <BrandLink color='inherit' />
              <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close' sx={{ marginLeft: 'auto' }}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <AppBarMenuContent orientation='column' />
        </Dialog>
      )}
    </Box>
  )
}
