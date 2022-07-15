import { Box, Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import HeadComponent from '@/components/ancillary/HeadComponent'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'

export default function LibrariesPageComponent() {
  const metaContent = {
    name: 'description',
    content: 'Libraries of Node Identity',
  }

  return (
    <NoDrawerPageScaffold>
      <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }}>
        <HeadComponent title='Libraries' metaContent={metaContent} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '2.5em', height: '550px' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            Libraries of Node Identity
          </Typography>
          <Typography variant='body1' component='p' gutterBottom>
            This is the Libraries page of the Node Identity project. It is a work in progress and is not yet complete.
          </Typography>
        </Box>
      </Container>
    </NoDrawerPageScaffold>
  )
}
