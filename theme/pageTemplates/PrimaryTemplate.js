import { useState } from 'react'
// import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

import MainAppBar from './templateComponents/MainAppBar'
import MainDrawer from './templateComponents/MainDrawer'
import Copyright from '../../components/misc/Copyright'

export default function PrimaryTemplate({ children }) {
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <Box sx={{ display: 'flex', mt: 7.5, padding: '1rem' }}>
        <MainAppBar open={open} handleDrawer={handleDrawer} />
        <MainDrawer open={open} />
        <Box>{children}</Box>
      </Box>
      <Copyright />
    </>
  )
}
