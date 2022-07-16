import { Paper, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import TitleBox from '@/components/misc/TitleBox'

export default function NIComponentLibrary({ padding }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding }} elevation={2}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          NI Component Library
        </Typography>
      </TitleBox>
      <Typography variant='h6' component='p' gutterBottom>
        Purpose
      </Typography>

      <Typography variant='h6' component='p' gutterBottom sx={{ marginTop: '1em' }}>
        Method
      </Typography>

      <Typography variant='h6' component='p' gutterBottom sx={{ marginTop: '1em' }}>
        Implementation
      </Typography>
    </Paper>
  )
}
