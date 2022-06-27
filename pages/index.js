import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ProTip from '../src/components/ProTip'
import Link from '../src/Link'
import Copyright from '../src/components/Copyright'

import HeadComponent from '../src/components/HeadComponent'
import PrimaryTemplate from '../src/pageTemplates/PrimaryTemplate'

import Image from 'next/image'
import logo from '../public/imgs/logo.png'

export default function Index() {
  return (
    <PrimaryTemplate>
      <HeadComponent title='Node Identity' />
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js example
        </Typography>
        <Link href='/about' color='secondary'>
          Go to the about page
        </Link>
        <Image src={logo} alt='Node Identity Logo' width='40' height='40' />
        <ProTip />
        <Copyright />
      </Box>
    </PrimaryTemplate>
  )
}

// <Container maxWidth='md'>
//   <HeadComponent title='Node Identity' />
//   <Box sx={{ my: 4 }}>
//     <Typography variant='h4' component='h1' gutterBottom>
//       Next.js example
//     </Typography>
//     <Link href='/about' color='secondary'>
//       Go to the about page
//     </Link>
//     <ProTip />
//     <Copyright />
//   </Box>
// </Container>
