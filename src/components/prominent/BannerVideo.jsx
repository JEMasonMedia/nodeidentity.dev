import BetterRandom from '@/utils/BetterRandom'

const videoStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'fill',
}

// const videos = ['Abstract', 'Explosion', 'Matrix', 'Network']
// const path = process.env.NEXT_PUBLIC_BANNER_VIDEO_PATH

export default function BannerVideo({ video }) {
  // const [isShown, setIsShown] = useState(false)
  // const videoRef = useRef(null)
  // const [video, setVideo] = useState(`/video/${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)
  // const [video, setVideo] = useState(`${path}${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)
  // const [video, setVideo] = useState(url)

  // onMouseEnter={() => toggleVideo(true)} onMouseLeave={() => toggleVideo(false)}
  // const toggleVideo = show => {
  //   setIsShown(show)
  // }

  // useEffect(() => {
  //   return () => {
  //     // setVideo(`/video/${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)
  //     setVideo(`${path}${videos[BetterRandom(0, videos.length - 1)]}-Small.mp4`)
  //   }
  // }, [isShown, setVideo])

  // const onEnded = e => {
  // e.target.currentTime = 11
  // e.target.play()
  // }

  return (
    <video autoPlay muted style={videoStyles}>
      <source src={video} type='video/mp4' />
    </video>
  )
}
