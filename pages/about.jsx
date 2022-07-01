import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
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
    </>
  )
}
