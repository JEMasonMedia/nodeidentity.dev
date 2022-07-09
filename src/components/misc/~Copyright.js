import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

export default function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      {'Copyright © '}
      <MuiLink color='inherit' href='https://nodeidentity.dev/' style={{ textDecoration: 'none' }}>
        Node Identity
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
