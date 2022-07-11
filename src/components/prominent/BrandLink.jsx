import Typography from '@mui/material/Typography'
import Link from '../helpers/Link'
import Logo from '@/assets/svg/Logo'

export default function BrandLink() {
  return (
    <Link href='/' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
      <Logo fill='currentColor' fontSize='170' width='40' height='40' />
      <Typography variant='h6' noWrap component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel', color: 'inherit', fontWeight: '600' }}>
        Node Identity
      </Typography>
    </Link>
  )
}
