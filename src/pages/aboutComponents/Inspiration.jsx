import { Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@/components/helpers/Link'
import TitleBox from '@/components/misc/TitleBox'

export default function Inspiration({ padding }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding, textAlign: 'center' }} elevation={2}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          Inspiration
        </Typography>
      </TitleBox>
      <Typography variant='body1' component='p' gutterBottom>
        The inspiration for this project came from the following:
      </Typography>
      <Typography variant='body2' component='p' gutterBottom sx={{ marginTop: '1em' }}>
        Identity Solutions
      </Typography>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li>
          <Link color='inherit' href='https://docs.microsoft.com/en-us/aspnet/identity/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>ASP.NET Identity</strong> - Microsoft
            </Typography>
          </Link>
        </li>
        <li>
          <Link color='inherit' href='https://duendesoftware.com/products/identityserver' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>IdentityServer</strong> - Duende Software
            </Typography>
          </Link>
        </li>
        <li>
          <Link color='inherit' href='https://www.passportjs.org/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>Passport.js</strong> - Passport
            </Typography>
          </Link>
        </li>
        <li>
          <Link color='inherit' href='https://auth0.com/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>auth0</strong> - auth0.com
            </Typography>
          </Link>
        </li>
        <li>And many other Authentication / Authorization solutions.</li>
      </ul>
      <Typography variant='body2' component='p' gutterBottom sx={{ marginTop: '1em' }}>
        Database Solutions
      </Typography>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li>
          <Link color='inherit' href='https://docs.microsoft.com/en-us/ef/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>Entity Framework Core</strong> - Microsoft
            </Typography>
          </Link>
        </li>
        <li>
          <Link color='inherit' href='https://www.mongodb.com/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>MongoDB/Atlas</strong> - MongoDB
            </Typography>
          </Link>
          <Link color='inherit' href='https://mongoosejs.com/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>Mongoose</strong>
            </Typography>
          </Link>
        </li>
        <li>
          <Link color='inherit' href='https://www.mysql.com/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>MySQL</strong> - Oracle
            </Typography>
          </Link>
          <Link color='inherit' href='http://knexjs.org/' target='_blank' sx={{ textDecoration: 'none' }}>
            <Typography variant='body1' component='p' gutterBottom>
              <strong>Knex.js</strong>
            </Typography>
          </Link>
        </li>

        <li>And many other database solutions.</li>
      </ul>
    </Paper>
  )
}
