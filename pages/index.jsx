import HomePageComponent from '@/pages/HomePageComponent'

export default function HomePage({ bannerVideo }) {
  return <HomePageComponent bannerVideo={bannerVideo} />
}

export async function getStaticProps() {
  const bannerVideo = process.env.BANNER_VIDEO_PATH
  return {
    props: {
      bannerVideo,
    },
  }
}
