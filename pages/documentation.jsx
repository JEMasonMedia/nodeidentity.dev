import { Box, Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Link from '../src/components/helpers/Link'
import HeadComponent from '../src/components/misc/HeadComponent'
import ProTip from '../src/components/misc/ProTip'
import NoDrawerPageScaffold from '../src/components/helpers/NoDrawerPageScaffold'

export default function documentation() {
  const metaContent = {
    name: 'description',
    content: 'Documentation of Node Identity',
  }

  return (
    <NoDrawerPageScaffold>
      <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }}>
        <HeadComponent title='Documentation' metaContent={metaContent} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '2.5em' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            Documentation of Node Identity
          </Typography>

          <Chip color='primary' label={'primary'} />
          <Chip color='secondary' label={'secondary'} />
          <Chip color='warning' label={'warning'} />
          <Chip color='error' label={'error'} />
          <Chip color='info' label={'info'} />
          <Chip color='success' label={'success'} />

          <Button variant='contained' component={Link} color='primary' href='/'>
            primary
          </Button>
          <Button variant='contained' component={Link} color='secondary' href='/'>
            secondary
          </Button>
          <Button variant='contained' component={Link} color='warning' href='/'>
            warning
          </Button>
          <Button variant='contained' component={Link} color='error' href='/'>
            error
          </Button>
          <Button variant='contained' component={Link} color='info' href='/'>
            info
          </Button>
          <Button variant='contained' component={Link} color='success' href='/'>
            success
          </Button>
          <ProTip />
        </Box>
      </Container>
    </NoDrawerPageScaffold>
  )
}
