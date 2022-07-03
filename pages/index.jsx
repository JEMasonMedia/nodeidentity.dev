import { Box, Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import HeadComponent from '../src/components/misc/HeadComponent'
import Logo from '../src/assets/svg/Logo'
import NodeLogo from '../src/assets/svg/NodeLogo'
import ReactLogo from '../src/assets/svg/ReactLogo'
import MUIIcon from '../src/assets/svg/MUIIcon'
import NextIcon from '../src/assets/svg/NextIcon'
import HomePageCard from '../src/components/homePage/HomePageCard'

const Home = () => {
  return (
    <Container maxWidth='xl'>
      <HeadComponent title='Node Identity' />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1em' }}>
        {/* <Image src={logo} alt='Node Identity Logo' width='200' height='200' /> */}
        <Typography variant='h4' noWrap component='div' style={{ marginTop: '1em' }}>
          Node Identity
        </Typography>

        {/* <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '1em', padding: '1em' }}> */}
        <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '1em' }}>
          <Grid item lg={4} xs={12} sm={6}>
            <HomePageCard
              image='/img/homePage/programmer.jpg'
              title='Node Identity Library'
              description='A plug and play authentication/authorization library for the Node.js environment.'
              links={[
                { text: 'Share', link: '#' },
                { text: 'Learn More', link: '#' },
              ]}
            />
          </Grid>
          <Grid item lg={4} xs={12} sm={6}>
            <HomePageCard
              image='/img/homePage/code.jpg'
              title='Node Identity Database'
              description='One-stop shop for all your Node.js database integration needs. One Modal Many Databases.'
              links={[
                { text: 'Share', link: '#' },
                { text: 'Learn More', link: '#' },
              ]}
            />
          </Grid>
          <Grid item lg={4} xs={12} sm={6}>
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
        {/* </Box> */}

        <Box width={1}>
          <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1em', marginTop: '2em' }}>
            <Logo fill='currentColor' fontSize='170' width='120' height='120' />
            <NodeLogo width='120' height='120' />
            <NextIcon width='140' height='120' />
            <ReactLogo width='120' height='120' />
            <MUIIcon width='120' height='120' />
          </Paper>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
