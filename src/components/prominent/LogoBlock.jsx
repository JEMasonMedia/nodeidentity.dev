import { Box, Paper, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import MuiLink from '@mui/material/Link'
import Logo from '@/assets/svg/Logo'
import NodeLogo from '@/assets/svg/NodeLogo'
import ReactLogo from '@/assets/svg/ReactLogo'
import MUIIcon from '@/assets/svg/MUIIcon'
import NextIcon from '@/assets/svg/NextIcon'

const LogoBlockPaper = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1em',
  marginTop: '1em',
  '&a': {
    textDecoration: 'none',
  },
}))

const genericStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const GridContainer = styled(Grid)(() => genericStyles)
const GridItem = styled(Grid)(() => genericStyles)

const GridItems = ({ href, logo }) => {
  return (
    <GridItem item lg={2} sm={6} xs={12}>
      <MuiLink color='inherit' href={href}>
        {logo}
      </MuiLink>
    </GridItem>
  )
}

const items = [
  {
    name: 'Node Identity',
    url: '/',
    logo: <Logo fill='currentColor' fontSize='170' width='120' height='120' />,
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    logo: <NodeLogo width='120' height='120' />,
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    logo: <NextIcon width='140' height='120' />,
  },
  {
    name: 'React.js',
    url: 'https://reactjs.org/',
    logo: <ReactLogo width='100' height='100' />,
  },
  {
    name: 'Material-UI',
    url: 'https://mui.com/',
    logo: <MUIIcon width='100' height='100' />,
  },
]

export default function LogoBlock() {
  return (
    <Box width={1}>
      <LogoBlockPaper elevation={1}>
        <GridContainer container spacing={2}>
          {items.map(item => (
            <GridItems key={item.name} href={item.url} logo={item.logo} />
          ))}
        </GridContainer>
      </LogoBlockPaper>
    </Box>
  )
}
