import { Box } from '@mui/material'
import { useState } from 'react'
import MainAppBar from '../prominent/MainAppBar'
import MainAppDrawer from '../ancillary/MainAppDrawer'
import Footer from '../prominent/Footer'

export default function DefaultPageScaffold({ children, mainAppBarLinks, mainAppDrawerLinks }) {
  const [open, setDrawerOpen] = useState(false)
  const handleDrawer = () => setDrawerOpen(!open)

  return (
    <>
      <MainAppBar showMenu='true' open={open} handleDrawer={handleDrawer} mainAppBarLinks={mainAppBarLinks} />
      <MainAppDrawer open={open} mainAppDrawerLinks={mainAppDrawerLinks} />
      {children}
      <Box sx={{}}>
        <Footer />
      </Box>
    </>
  )
}
