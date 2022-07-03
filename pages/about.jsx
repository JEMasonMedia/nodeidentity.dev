import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Link from '../src/components/helpers/Link'
import HeadComponent from '../src/components/misc/HeadComponent'
import ProTip from '../src/components/misc/ProTip'

export default function About() {
  const metaContent = {
    name: 'description',
    content: 'About Node Identity',
  }

  return (
    <>
      <HeadComponent title='About' metaContent={metaContent} />

      <Typography variant='h4' component='h1' gutterBottom>
        Next.js example
      </Typography>

      <Chip color='primary' label={'primary'} />
      <Chip color='secondary' label={'secondary'} />
      <Chip color='warning' label={'warning'} />
      <Chip color='error' label={'error'} />
      <Chip color='info' label={'info'} />
      <Chip color='success' label={'success'} />

      <br></br>
      <br></br>
      <Button variant='contained' component={Link} color='primary' href='/'>
        primary
      </Button>
      <br></br>
      <br></br>
      <Button variant='contained' component={Link} color='secondary' href='/'>
        secondary
      </Button>
      <br></br>
      <br></br>
      <Button variant='contained' component={Link} color='warning' href='/'>
        warning
      </Button>
      <br></br>
      <br></br>
      <Button variant='contained' component={Link} color='error' href='/'>
        error
      </Button>
      <br></br>
      <br></br>
      <Button variant='contained' component={Link} color='info' href='/'>
        info
      </Button>
      <br></br>
      <br></br>
      <Button variant='contained' component={Link} color='success' href='/'>
        success
      </Button>
      <ProTip />
    </>
  )
}
