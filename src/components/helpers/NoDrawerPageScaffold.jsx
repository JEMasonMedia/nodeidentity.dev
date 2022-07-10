import { Box } from '@mui/material'
import { useState } from 'react'
import MainAppBar from '../prominent/MainAppBar'
import Footer from '../prominent/Footer'

export default function NoDrawerPageScaffold({ children, mainAppBarLinks, mainAppDrawerLinks }) {
  const [open, setDrawerOpen] = useState(false)
  const handleDrawer = () => setDrawerOpen(!open)

  return (
    <>
      <MainAppBar open={open} handleDrawer={handleDrawer} mainAppBarLinks={mainAppBarLinks} />
      {children}
      <Box sx={{}}>
        <Footer />
      </Box>
    </>
  )
}
