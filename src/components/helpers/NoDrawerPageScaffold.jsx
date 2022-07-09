import { Box } from '@mui/material'
import { useState } from 'react'
import MainAppBar from './MainAppBar'
import Footer from '../misc/Footer'

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
