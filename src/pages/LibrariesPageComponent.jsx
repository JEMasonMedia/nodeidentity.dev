import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Paper, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import useMediaQuery from '@mui/material/useMediaQuery'
import HeadComponent from '@/components/ancillary/HeadComponent'
import NoDrawerPageScaffold from '@/components/helpers/NoDrawerPageScaffold'
import TitleBox from '@/components/misc/TitleBox'
import NodeIdentityAuth from './LibrariesPageComponents/NodeIdentityAuth'
import NodeIdentityDB from './LibrariesPageComponents/NodeIdentityDB'
import NIComponentLibrary from './LibrariesPageComponents/NIComponentLibrary'
import FutureServices from './LibrariesPageComponents/FutureServices'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ paddingTop: '1em' }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function LibrariesPageComponent() {
  const metaContent = {
    name: 'description',
    content: 'Libraries of Node Identity',
  }

  const matches = useMediaQuery('(max-width:899px)')
  const padding = { padding: matches ? '1em' : '2em' }
  const { tab } = useRouter().query
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    setValue(tab ? parseInt(tab) : 0)
  }, [tab, setValue])

  return (
    <NoDrawerPageScaffold>
      <HeadComponent title='Libraries' metaContent={metaContent} />
      <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', marginTop: '5em' }}>
        <Paper sx={{ padding }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TitleBox border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
                <Typography variant='h4' component='h1' gutterBottom>
                  Libraries of Node Identity
                </Typography>
              </TitleBox>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto' textColor='secondary' indicatorColor='secondary' aria-label='basic tabs example'>
                    <Tab label={matches ? 'Auth' : 'Node Identity Auth'} {...a11yProps(0)} />
                    <Tab label={matches ? 'DB' : 'Node Identity DB'} {...a11yProps(1)} />
                    <Tab label={matches ? 'Lib' : 'NI Component Library'} {...a11yProps(2)} />
                    <Tab label={matches ? 'Services' : 'Future Services'} {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <NodeIdentityAuth padding={padding} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <NodeIdentityDB padding={padding} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <NIComponentLibrary padding={padding} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <FutureServices padding={padding} />
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </NoDrawerPageScaffold>
  )
}
