import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ProTip from '../src/components/ProTip'
import Link from '../src/Link'
import Copyright from '../src/components/Copyright'

import HeadComponent from '../src/components/HeadComponent'

export default function About() {
  const metaContent = {
    name: 'description',
    content: 'About Node Identity',
  }

  return (
    <Container maxWidth='md'>
      <HeadComponent title='About' metaContent={metaContent} />
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js example
        </Typography>
        <Button variant='contained' component={Link} color='primary' href='/'>
          primary
        </Button>

        <Button variant='contained' component={Link} color='secondary' href='/'>
          secondary
        </Button>

        <Button variant='contained' component={Link} color='error' href='/'>
          error
        </Button>

        <Button variant='contained' component={Link} color='warning' href='/'>
          warning
        </Button>

        <Button variant='contained' component={Link} color='info' href='/'>
          info
        </Button>

        <Button variant='contained' component={Link} color='success' href='/'>
          success
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
