import { Container } from '@mui/material'
import HeadComponent from '@/components/ancillary/HeadComponent'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'
import HomeBanner from './homeComponents/HomeBanner'
import HomeCards from './homeComponents/HomeCards'
import LogoBlock from './homeComponents/LogoBlock'

const homeContainer = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }

export default function HomePageComponent({ bannerVideo }) {
  return (
    <NoDrawerPageScaffold>
      <Container maxWidth='xl' sx={homeContainer}>
        <HeadComponent title='Node Identity' />
        <HomeBanner bannerVideo={bannerVideo} />
        <HomeCards />
        <LogoBlock />
      </Container>
    </NoDrawerPageScaffold>
  )
}
