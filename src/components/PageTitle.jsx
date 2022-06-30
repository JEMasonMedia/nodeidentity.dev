import { css, Typography } from '@mui/material'
import MUIIcon from './smartIcons/MUIIcon'
import NextIcon from './smartIcons/NextIcon'

const PageTitle = () => (
  <div
    style={{
      display: 'grid',
      gridAutoFlow: 'column',
      alignItems: 'center',
      gridGap: '32px',
    }}>
    <NextIcon />
    <Typography variant='h1' fontWeight='400'>
      +
    </Typography>
    <MUIIcon />
  </div>
)

export default PageTitle
