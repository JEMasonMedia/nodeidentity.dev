import { Box, Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import HeadComponent from '@/components/misc/HeadComponent'
import Logo from '@/assets/svg/Logo'
import NodeLogo from '@/assets/svg/NodeLogo'
import ReactLogo from '@/assets/svg/ReactLogo'
import MUIIcon from '@/assets/svg/MUIIcon'
import NextIcon from '@/assets/svg/NextIcon'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'
import HomePageCard from '@/components/prominent/HomePageCard'

const Home = () => {
  return (
    <NoDrawerPageScaffold>
      <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }}>
        <HeadComponent title='Node Identity' />
        <Paper
          elevation={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '25em',
            padding: '0',
            backgroundImage: "url('/img/homePage/lock.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: 'white',
              padding: '2em',
            }}>
            <Typography
              variant='h1'
              component='div'
              style={{
                fontFamily: 'Cinzel',
              }}>
              Node Identity
            </Typography>
            <Typography variant='h6' component='div' style={{ marginTop: '1em' }}>
              A do it yourself identity and database management system
            </Typography>
            <Typography variant='caption text' component='div' style={{ marginTop: '1em' }}>
              (under development)
            </Typography>
          </Box>
        </Paper>

        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '0.0em' }}>
          <Grid item lg={4} md={4} xs={12} sm={6}>
            <HomePageCard
              image='/img/homePage/programmer.jpg'
              title='Node Identity Library'
              description='A plug and play authentication and authorization library for the Node.js environment. Set it up in seconds and start using it.'
              links={[
                { text: 'Share', link: '#' },
                { text: 'Learn More', link: '#' },
              ]}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={12} sm={6}>
            <HomePageCard
              image='/img/homePage/code.jpg'
              title='Node Identity DB'
              description='One-stop shop for all your Node.js database integration needs. 
                One Modal Many Databases.'
              links={[
                { text: 'Share', link: '#' },
                { text: 'Learn More', link: '#' },
              ]}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={12} sm={6}>
            <HomePageCard
              image='/img/homePage/reactPage.jpg'
              title='NI Component Library'
              description='Continuing plug and play, a full stack of components for React Next.js and more.'
              links={[
                { text: 'Share', link: '#' },
                { text: 'Learn More', link: '#' },
              ]}
            />
          </Grid>
        </Grid>

        <Box width={1}>
          <Paper elevation={1} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1em', marginTop: '1em' }}>
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Grid item lg={2} xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MuiLink color='inherit' href='/' style={{ textDecoration: 'none' }}>
                  <Logo fill='currentColor' fontSize='170' width='120' height='120' />
                </MuiLink>
              </Grid>
              <Grid item lg={2} xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MuiLink target='_blank' color='inherit' href='https://nodejs.org/' style={{ textDecoration: 'none' }}>
                  <NodeLogo width='120' height='120' />
                </MuiLink>
              </Grid>
              <Grid item lg={2} xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MuiLink target='_blank' color='inherit' href='https://nextjs.org/' style={{ textDecoration: 'none' }}>
                  <NextIcon width='140' height='120' />
                </MuiLink>
              </Grid>
              <Grid item lg={2} xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MuiLink target='_blank' color='inherit' href='https://reactjs.org/' style={{ textDecoration: 'none' }}>
                  <ReactLogo width='120' height='120' />
                </MuiLink>
              </Grid>
              <Grid item lg={2} xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MuiLink target='_blank' color='inherit' href='https://mui.com/' style={{ textDecoration: 'none' }}>
                  <MUIIcon width='120' height='120' />
                </MuiLink>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </NoDrawerPageScaffold>
  )
}

export default Home
