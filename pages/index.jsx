import { Container } from '@mui/material'
import HeadComponent from '@/components/misc/HeadComponent'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'
import HomeBanner from '@/components/prominent/HomeBanner'
import HomeCards from '@/components/prominent/HomeCards'
import LogoBlock from '@/components/prominent/LogoBlock'

const homeContainer = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }

export default function Home({ video }) {
  console.log('My Application Version', process.env.NEXT_PUBLIC_BANNER_VIDEO_PATH)
  return (
    <NoDrawerPageScaffold>
      <Container maxWidth='xl' sx={homeContainer}>
        <HeadComponent title='Node Identity' />
        <HomeBanner video={video} />
        <HomeCards />
        <LogoBlock />
      </Container>
    </NoDrawerPageScaffold>
  )
}

export async function getStaticProps() {
  const video = process.env.BANNER_VIDEO_PATH
  return {
    props: {
      video,
    },
  }
}
