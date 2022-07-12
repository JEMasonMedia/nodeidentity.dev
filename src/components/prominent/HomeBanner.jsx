import { useState, useEffect } from 'react'
import { Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import BetterRandom from '@/utils/BetterRandom'

const HomeBannerPaper = styled(Paper)(() => ({
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
}))

const HomeBannerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.6)',
  color: 'white',
  padding: '2em',
  position: 'relative',
}))

const videoStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'fill',
}

const videos = ['Abstract', 'Explosion', 'Matrix', 'Network']
const path = process.env.NEXT_PUBLIC_HIDDEN_FOR_NOW
// const path = 'https://freethecube.com//'

export default function HomeBanner() {
  const [isShown, setIsShown] = useState(false)
  // const [video, setVideo] = useState(`/video/${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)
  const [video, setVideo] = useState(`${path}${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)

  const toggleVideo = show => {
    setIsShown(show)
  }

  useEffect(() => {
    return () => {
      // setVideo(`/video/${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)
      setVideo(`${path}${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)
    }
  }, [isShown, setVideo])

  return (
    <HomeBannerPaper elevation={1}>
      <HomeBannerBox>
        <Typography variant='h1' component='div' style={{ fontFamily: 'Cinzel', zIndex: '1' }}>
          Node Identity
        </Typography>
        <Typography variant='h6' component='div' style={{ marginTop: '1em', zIndex: '1' }}>
          A do it yourself identity and database management system
        </Typography>
        <Typography variant='caption text' component='div' style={{ marginTop: '1em', zIndex: '1' }} onMouseEnter={() => toggleVideo(true)} onMouseLeave={() => toggleVideo(false)}>
          (under development)
        </Typography>
        {isShown && (
          <video autoPlay loop muted style={videoStyles}>
            <source src={video} type='video/mp4' />
          </video>
        )}
      </HomeBannerBox>
    </HomeBannerPaper>
  )
}
