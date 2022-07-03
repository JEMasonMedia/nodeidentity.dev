import { Box } from '@mui/material'
import { useState } from 'react'
import MainAppBar from './MainAppBar'
import MainAppDrawer from './MainAppDrawer'

export default function DefaultPageScaffold({ children, mainAppBarLinks, mainAppDrawerLinks }) {
  const [open, setDrawerOpen] = useState(false)
  const handleDrawer = () => setDrawerOpen(!open)

  return (
    <>
      <MainAppBar open={open} handleDrawer={handleDrawer} mainAppBarLinks={mainAppBarLinks} />
      <MainAppDrawer open={open} mainAppDrawerLinks={mainAppDrawerLinks} />
      <Box sx={{}}>{children}</Box>
    </>
  )
}
