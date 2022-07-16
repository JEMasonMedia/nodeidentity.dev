import { Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import HeadComponent from '@/components/ancillary/HeadComponent'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'
import TitleBox from '@/components/misc/TitleBox'
import Inspiration from './aboutComponents/Inspiration'
import Motivation from './aboutComponents/Motivation'
import MissionAndGoals from './aboutComponents/MissionAndGoals'
import Bio from './aboutComponents/Bio'
import Education from './aboutComponents/Education'
import History from './aboutComponents/History'

export default function AboutPageComponent() {
  const metaContent = {
    name: 'description',
    content: 'About Node Identity',
  }

  const matches = useMediaQuery('(max-width:899px)')
  const padding = { padding: matches ? '1em' : '2em' }

  return (
    <NoDrawerPageScaffold>
      <HeadComponent title='About' metaContent={metaContent} />
      <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', marginTop: '5em' }}>
        <Paper sx={{ padding }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TitleBox border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
                <Typography variant='h4' component='h1' gutterBottom>
                  About Node Identity
                </Typography>
              </TitleBox>
            </Grid>
            <Grid item xl={6} lg={6} xs={12}>
              <Inspiration padding={padding} />
            </Grid>
            <Grid item xl={6} lg={6} xs={12}>
              <Motivation padding={padding} />
            </Grid>
            <Grid item xl={12} lg={12} xs={12}>
              <MissionAndGoals padding={padding} />
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ padding, marginTop: '1em' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TitleBox border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
                <Typography variant='h4' component='h1' gutterBottom>
                  About The Creator
                </Typography>
              </TitleBox>
            </Grid>
            <Grid item xl={6} lg={6} xs={12}>
              <Bio padding={padding} />
            </Grid>
            <Grid item xl={6} lg={6} xs={12}>
              <Education padding={padding} />
            </Grid>
            <Grid item xl={12} lg={12} xs={12}>
              <History padding={padding} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </NoDrawerPageScaffold>
  )
}
