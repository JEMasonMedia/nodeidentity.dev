import { Paper, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import TitleBox from '@/components/misc/TitleBox'
import BrandLink from '@/components/prominent/BrandLink'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Motivation({ padding }) {
  const matches = useMediaQuery('(max-width:600px)')
  const maxWidth = { maxWidth: matches ? '40%' : '70%' }
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding, textAlign: 'center' }} elevation={2}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          Motivation
        </Typography>
      </TitleBox>
      <Typography variant='body1' component='p' gutterBottom>
        As you can see from the Inspiration section, it represents some of the finest code of their respective types ever written and it is not this projects motivation to best them.
      </Typography>
      <br />
      <Typography variant='body1' component='p' gutterBottom>
        The motivation of the Node Identity project is to provide a tool set to interact with those and many other impressive libraries in such a way where masters of the art of software engineering, as well as students with no experience at all, can spend their time focusing on the product or service they are attempting to create, instead of wading through so much boiler plate to get up and running.
      </Typography>
      <br />
      <Typography variant='body1' component='p' gutterBottom>
        By attempting to extend and/or encapsulate these existing libraries, the Node Identity project is hoping to create a tool set that can be used by anyone, anywhere, and any time; a true plug and play, virtually no configuration required, tool set built on confidence, trust, and efficiency.
      </Typography>
      <Paper sx={{ padding: '1em 5% 1em 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%', marginTop: '1em' }}>
        <BrandLink />
        <Typography variant='body1' component='p' gutterBottom sx={{ maxWidth }}>
          Respect Comradery Community Team Work Excellence
        </Typography>
        <Typography variant='body1' component='p' gutterBottom sx={{ maxWidth }}>
          And above all: Loving Kindness for All
        </Typography>
      </Paper>
    </Paper>
  )
}
