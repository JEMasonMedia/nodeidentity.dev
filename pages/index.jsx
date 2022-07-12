import { Container } from '@mui/material'
import HeadComponent from '@/components/misc/HeadComponent'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'
import HomeBanner from '@/components/prominent/HomeBanner'
import HomeCards from '@/components/prominent/HomeCards'
import LogoBlock from '@/components/prominent/LogoBlock'

const homeContainer = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }

export default function Home() {
  return (
    <NoDrawerPageScaffold>
      <Container maxWidth='xl' sx={homeContainer}>
        <HeadComponent title='Node Identity' />
        <HomeBanner />
        <HomeCards />
        <LogoBlock />
      </Container>
    </NoDrawerPageScaffold>
  )
}
