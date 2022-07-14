import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import BannerVideo from '@/components/prominent/BannerVideo'

const HomeBannerPaper = styled(Paper)(() => ({
  height: '25em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.7)',
  color: 'white',
  padding: '2em',
  position: 'relative',
}))

export default function HomeBanner({ video }) {
  return (
    <HomeBannerPaper elevation={1}>
      <Typography variant='h1' component='div' style={{ fontFamily: 'Cinzel', zIndex: '1' }}>
        Node Identity
      </Typography>
      <Typography variant='h6' component='div' style={{ marginTop: '1em', zIndex: '1' }}>
        A do it yourself identity and database management system
      </Typography>
      <Typography variant='caption text' component='div' style={{ marginTop: '1em', zIndex: '1' }}>
        (under development)
      </Typography>
      <BannerVideo video={video} />
    </HomeBannerPaper>
  )
}
