import { Paper, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import TitleBox from '@/components/misc/TitleBox'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

const history = [
  { dates: '1995-2001', titles: 'General Laborer, Lawn Height Reduction Specialist, Sheet Metal Mechanic Apprentice, Night Shift Lead Man, Card Cage Assembler, Welder, Equipment Operator, Forklift Operator, Pizza Delivery Driver, Sacker, Roofer, Boiler Makers Helper' },
  { dates: '2002-2004', titles: 'Student - Software Engineering, Cashier, Stocker' },
  { dates: '2005-present', titles: 'CDL Driver - Coiled Tubing Unit, CDL Driver - Oilfield Fluid, Driver Trainer - Not Driving, Lead Driver, Dispatcher, Student - Software Engineering, Lawn and Tree Service - Owner, Satellite Technician, Uber/Lyft Driver, Order Selector, Transportation Specialist - Load Planner, Transportation Team Leader - Dispatch' },
]

export default function History({ padding }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding, textAlign: 'center' }} elevation={3}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          History &amp; Experience
        </Typography>
      </TitleBox>
      <Typography variant='h5' component='h1' gutterBottom>
        Titles Held
      </Typography>
      <Box>
        <TableContainer component={Paper}>
          <Table size='small' aria-label='a dense table'>
            <TableBody>
              {history.map((history, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {history.dates}
                  </TableCell>
                  <TableCell align='left'>{history.titles}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Typography variant='h5' component='h1' gutterBottom sx={{ marginTop: '1em' }}>
        Personal Statement
      </Typography>
      <Paper sx={{ padding: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <Typography variant='body1' component='h1' gutterBottom>
          As you can see, I am a man that has worn many hats. Even this list doesn&apos;t hold them all. I have done what was necessary to take care of my family given the circumstances faced on the day. My son is nearly grown and I can now focus more on the passion for software engineering that started when I was coding a TI-81 calculator in high school in 1995. My dream is here, now, and I will make it amazing. I hope that many join me in this endeavour so that I may plant a tree that may cast shade for generations.
        </Typography>
      </Paper>
    </Paper>
  )
}
