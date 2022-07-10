import Typography from '@mui/material/Typography'
import Link from '../helpers/Link'

export default function AppBarLink({ to, text, sx }) {
  return (
    <Link href={to} sx={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
      <Typography variant='body1' noWrap component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel', fontSize: sx.fontSize }}>
        {text}
      </Typography>
    </Link>
  )
}