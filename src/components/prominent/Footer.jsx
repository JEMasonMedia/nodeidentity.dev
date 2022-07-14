import { Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Link from '../helpers/Link'
import Copyright from '../misc/CopyRight'
import ContactMailerButton from '../misc/ContactMailerButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import BrandLink from './BrandLink'

const MainBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1em',
  marginTop: '1em',
  marginBottom: '1em',
}))

const MainGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}))

const GridItemBox = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

const FooterLink = ({ href, icon, text }) => {
  return (
    <Link href={href} target='_blank' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
      <Typography variant='body2' color='text.secondary' align='center' component='div' style={{ display: 'flex', alignItems: 'center', padding: '0.5em' }}>
        {icon && icon}
        {text}
      </Typography>
    </Link>
  )
}

export default function Footer() {
  return (
    <MainBox width={1}>
      <MainGrid container spacing={2}>
        <Grid item lg={3} xs={12} sm={12}>
          <GridItemBox>
            <BrandLink />
            <FooterLink href='/about' icon={<LightbulbIcon sx={{ marginRight: '0.5em' }} />} text='Creator: Joel E. Mason' />
            <FooterLink href='https://github.com/JEMasonMedia' icon={<GitHubIcon sx={{ marginRight: '0.5em' }} />} text='GitHub: JEMasonMedia' />
            <ContactMailerButton />
          </GridItemBox>
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <GridItemBox>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <GitHubIcon sx={{ marginRight: '0.5em' }} />
              <Typography variant='body2' color='text.secondary' align='center' component='div' style={{}}>
                Source on GitHub (under active development)
              </Typography>
            </Box>
            <FooterLink href='https://github.com/JEMasonMedia/nodeidentity.dev' text='This Website' />
            <FooterLink href='https://github.com/JEMasonMedia/Node-Identity' text='Node Identity' />
            <FooterLink href='https://github.com/JEMasonMedia/Node-Identity-DB' text='Node Identity DB' />
            <FooterLink href='#' text='NI Component Library (project not started)' />
          </GridItemBox>
        </Grid>
        <Grid item lg={3} xs={12} sm={12}>
          <GridItemBox>
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
          </GridItemBox>
        </Grid>
      </MainGrid>
    </MainBox>
  )
}
