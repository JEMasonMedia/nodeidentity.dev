import { Box } from '@mui/material'
import { useState } from 'react'
import MainAppBar from './MainAppBar'
import MainAppDrawer from './MainAppDrawer'
import Footer from '../misc/Footer'

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
