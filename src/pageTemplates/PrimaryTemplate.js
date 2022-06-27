import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

import MainAppBar from './templateComponents/MainAppBar'
import MainDrawer from './templateComponents/MainDrawer'

export default function PrimaryTemplate({ children }) {
  const [open, setOpen] = React.useState(false)

  const handleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MainAppBar open={open} handleDrawer={handleDrawer} />
        <MainDrawer open={open} />
        <Box style={{ marginTop: '26px' }}>{children}</Box>
      </Box>
    </>
  )
}
