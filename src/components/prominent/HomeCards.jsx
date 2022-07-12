import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import HomePageCard from '@/components/prominent/HomePageCard'

const GridContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0.0em',
}))

export default function HomeCards() {
  return (
    <GridContainer container spacing={2}>
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
    </GridContainer>
  )
}
