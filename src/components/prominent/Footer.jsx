import { Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Link from '../helpers/Link'
import Copyright from '../misc/CopyRight'
import ContactMailerButton from '../misc/ContactMailerButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import BrandLink from './BrandLink'

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
            <BrandLink />
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
        <Grid item lg={3} xs={12} sm={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <GitHubIcon sx={{ marginRight: '0.5em' }} />
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{}}>
                Source on GitHub (under active development)
              </Typography>
            </Box>
            <Link href='https://github.com/JEMasonMedia/nodeidentity.dev' target='_blank' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{ display: 'flex', alignItems: 'center', padding: '0.5em' }}>
                This Website
              </Typography>
            </Link>
            <Link href='https://github.com/JEMasonMedia/Node-Identity' target='_blank' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{ display: 'flex', alignItems: 'center', padding: '0.5em' }}>
                Node Identity
              </Typography>
            </Link>
            <Link href='https://github.com/JEMasonMedia/Node-Identity-DB' target='_blank' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{ display: 'flex', alignItems: 'center', padding: '0.5em' }}>
                Node Identity DB
              </Typography>
            </Link>
            <Link href='#' target='_blank' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{ display: 'flex', alignItems: 'center', padding: '0.5em' }}>
                NI Component Library (project not started)
              </Typography>
            </Link>
          </Box>
        </Grid>
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
