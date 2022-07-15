import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import TitleBox from '@/components/misc/TitleBox'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

const education = [
  { name: 'High School', description: 'Hallsville ISD - Hallsville TX', degree: 'GED' },
  { name: 'College', description: 'Texas State Technical College - Marshall TX', degree: 'Software Engineering' },
  { name: 'College', description: 'University of Texas at Tyler - Tyler TX', degree: 'Software Engineering' },
]

const certification = [
  { name: 'Certification', description: 'Sheet Metal Mechanic Apprentice', year: '1997' },
  { name: 'Certification', description: 'Office XP', year: 'Feb 2004' },
  { name: 'Certification', description: 'Father of the Century', year: 'Oct 2004' },
  { name: 'Certification', description: 'Class A CDL with XT/Triples Endorsements', year: 'Jan 2005' },
  { name: 'Certification', description: 'Satellite, TV and Internet, Commercial Installer', year: '2016' },
]

export default function Education({ padding }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding, textAlign: 'center' }} elevation={3}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          Education &amp; Certifications
        </Typography>
      </TitleBox>
      <TableContainer component={Paper}>
        <Table size='small' aria-label='a dense table'>
          <TableBody>
            {education.map((education, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {education.name}
                </TableCell>
                <TableCell align='left'>{education.description}</TableCell>
                <TableCell align='left'>{education.degree}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <TableContainer component={Paper}>
        <Table size='small' aria-label='a dense table'>
          <TableBody>
            {certification.map((certification, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {certification.name}
                </TableCell>
                <TableCell align='left'>{certification.description}</TableCell>
                <TableCell align='left'>{certification.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
