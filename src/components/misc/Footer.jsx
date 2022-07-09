import { Box, Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Link from '../helpers/Link'
import Logo from '../../assets/svg/Logo'
import Copyright from './CopyRight'
import ContactMailerButton from './ContactMailerButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

export default function Footer() {
  return (
    <Box
      width={1}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1em',
        marginTop: '1em',
        marginBottom: '1em',
      }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Grid item lg={3} xs={12} sm={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Link href='/' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Logo fill='currentColor' fontSize='170' width='40' height='40' />
              <Typography variant='h6' component='div' style={{ marginLeft: '10px', fontFamily: 'Cinzel' }}>
                Node Identity
              </Typography>
            </Link>
            <Link href='/about' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{ display: 'flex', alignItems: 'center', padding: '0.5em' }}>
                <LightbulbIcon sx={{ marginRight: '0.5em' }} />
                Creator: Joel E. Mason
              </Typography>
            </Link>
            <Link href='https://github.com/JEMasonMedia' target='_blank' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{ display: 'flex', alignItems: 'center', padding: '0.5em' }}>
                <GitHubIcon sx={{ marginRight: '0.5em' }} />
                GitHub: JEMasonMedia
              </Typography>
            </Link>
            <ContactMailerButton />
          </Box>
        </Grid>
        <Grid item lg={3} xs={12} sm={12}></Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Copyright />
            <Box sx={{ width: '100%' }}>
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{}}>
                Included external libraries, trademarks, copyrights, and other intellectual contributions are owned by their respective organizations.
              </Typography>
              <br />
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{}}>
                Node Identity holds no official affiliation with any external libraries or tools used within the project and will be documented in reasonable detail on a future credits page once fully determined.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
