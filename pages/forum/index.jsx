import { Box, Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Link from '@/components/helpers/Link'
import HeadComponent from '@/components/misc/HeadComponent'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'

export default function Libraries() {
  const metaContent = {
    name: 'description',
    content: 'Forum of Node Identity',
  }

  return (
    <NoDrawerPageScaffold>
      <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }}>
        <HeadComponent title='Forum' metaContent={metaContent} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '2.5em', height: '550px' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            Forum of Node Identity
          </Typography>

          <Typography variant='body1' component='p' gutterBottom>
            This is the Forum of the Node Identity project. It is a work in progress and is not yet complete.
          </Typography>
        </Box>
      </Container>
    </NoDrawerPageScaffold>
  )
}
