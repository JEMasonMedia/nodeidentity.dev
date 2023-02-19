import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import TitleBox from '@/components/misc/TitleBox'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

const rows = [
  { name: 'Name', description: 'Joel E. Mason' },
  { name: 'Age', description: '43' },
  { name: 'Occupation', description: 'Transportation Dispatcher for a large distribution company' },
  { name: 'Family', description: 'Wife and one son' },
  { name: 'Interests', description: 'Many, but to name a few: Software, Metal and Wood Fabrication, Heavy Equipment, Real Estate' },
  { name: 'Hobbies', description: 'Coding software, Gaming, Welding, Wood Working' },
  { name: 'Goals', description: 'To retire as an accomplished Software Engineer and Entrepreneur' },
]

export default function Bio({ padding }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding, textAlign: 'center' }} elevation={2}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          Bio
        </Typography>
      </TitleBox>
      <TableContainer component={Paper}>
        <Table size='small' aria-label='a dense table'>
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
  )
}
