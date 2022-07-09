import Typography from '@mui/material/Typography'
import Link from '../helpers/Link'

export default function Copyright() {
  return (
    <Typography variant='body1' color='text.secondary' align='center' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      {'Copyright © '}
      <Link color='inherit' href='/' style={{ textDecoration: 'none' }}>
        Node Identity
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
