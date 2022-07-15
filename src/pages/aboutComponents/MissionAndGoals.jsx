import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import TitleBox from '@/components/misc/TitleBox'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const rows = [
  { name: 'Node Identity', description: 'Full Stack Authentication and Authorization Library for Node, Express, React, Next, Vue, and more' },
  { name: 'Node Identity DB', description: 'A One Modal Many databases Connection and Translation framework matrix and UI' },
  { name: 'NI Component Library', description: 'UI Components for Full Page User Profile, Administration, Authentication, and Authorization' },
  { name: 'Future Services', description: 'Various Hosting Options, Full Stack Engineering, and Templates' },
]

export default function MissionAndGoals({ padding }) {
  return (
    <Paper sx={{ padding }} elevation={3}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          Mission &amp; Goals
        </Typography>
      </TitleBox>
      <Paper sx={{ padding: '1em 5% 1em 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%', marginTop: '1em' }}>
        <Typography variant='h5' component='p' gutterBottom>
          Mission
        </Typography>
        <Typography variant='body1' component='p' gutterBottom sx={{ marginBottom: '1em' }}>
          To crush the competition with merciless ferver! (Just Kidding! <EmojiEmotionsIcon />)
        </Typography>
        <Typography variant='h5' component='p' gutterBottom>
          Real Mission
        </Typography>
        <Typography variant='body1' component='p' gutterBottom>
          To Learn, Accomplish, Grow, and Contribute to the Node.js community by building and maintaining a Node.js ecosystem for Auth and Database needs with Imagination, Dedication, and Passion with what Node Identity can offer. The mission of Node Identity is to build a community of developers and enthusiasts who are passionate about Node.js and the open source community. No matter how good it might be, it can be made better!
        </Typography>
      </Paper>
      <Paper sx={{ padding: '1em 5% 1em 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '1em' }}>
        <Typography variant='h5' component='p' gutterBottom>
          Goals
        </Typography>
        <TableContainer component={Paper}>
          <Table size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>Goals</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='left'>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Paper>
  )
}
