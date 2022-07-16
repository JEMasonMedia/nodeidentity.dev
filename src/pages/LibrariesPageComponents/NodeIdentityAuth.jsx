import { Paper, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import TitleBox from '@/components/misc/TitleBox'
import Link from '@/components/helpers/Link'
/* eslint-disable */

export default function NodeIdentityAuth({ padding }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding }} elevation={2}>
      <TitleBox marginBottom border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor='grey.600'>
        <Typography variant='h5' component='h1' gutterBottom>
          Node Identity Auth
        </Typography>
      </TitleBox>
      <Typography variant='h6' component='p' gutterBottom>
        Purpose
      </Typography>
      <Typography variant='body1' component='p' gutterBottom>
        To maintain Authentication and Authorization for a project as an integrated or stand alone api service. This will be a service that can be used by any application, and any user, to authenticate and authorize users. I found in my research over the last several years that there was a lack of a similar library to ASP.NET Identity that can simply be dropped into an application and used with virtually no configuration. As an API, ASP.NET Identity does need some setup, but it is still incredibly easy to use. The Node Identity project wishes to remedy this by building a Node.js emulation of ASP.NET Identity, and provide a tool set that is equally as easy to use.
      </Typography>
      <Paper sx={{ padding: '1em' }}>
        <Typography variant='body2' component='p' gutterBottom>
          Features
        </Typography>
        <ul>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              For React and other SPA libraries, an API service is necessary to authenticate and authorize users. Node Identity Auth aims to be almost as easy as a simple import statement to then have a fully functional user management system, with conjoining components, for an extremely rich user experience that is also industry standard secure.
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              For Next.js and other libraries including but limited to Blazor.NET, the possibilities of Node Identity Auth are endless. Having an Auth library that is drop in ready for Node.js and Blazor.NET and others would bridge the gap of both incredible worlds of web based software development.
            </Typography>
          </li>
        </ul>
      </Paper>
      <Typography variant='h6' component='p' gutterBottom sx={{ marginTop: '1em' }}>
        Method
      </Typography>
      <Typography variant='body1' component='p' gutterBottom>
        In the beginning, Node Identity Auth will essentially be a wrapper for Passport.js and/or NextAuth.js with much of the basic configuration already set with a full array of additional functionality for a total user management system. The customizable API will handle all the basic logging in and out functions, but also provide a full array of user settings and role management built in, right out of the box.
      </Typography>
      <Paper sx={{ padding: '1em' }}>
        <Typography variant='body2' component='p' gutterBottom>
          User Management
        </Typography>
        <ul>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              Admin Control Panel - This is a full admin control panel that can be used to manage users, roles, and permissions.
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              User Settings Panel - This is a full user settings panel that can be used to manage user settings.
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              Optional and Premium Features - TBD, but this will be a full array of optional and premium features.
            </Typography>
          </li>
        </ul>
        <Typography variant='body2' component='p' gutterBottom>
          External Authentication
        </Typography>
        <ul>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              With the popularity of conjoining services, such as logging in with GitHub or Google, Node Identity Auth will provide a full array of external authentication options.
            </Typography>
          </li>
        </ul>
      </Paper>
      <Typography variant='h6' component='p' gutterBottom sx={{ marginTop: '1em' }}>
        Implementation
      </Typography>
      <Typography variant='body1' component='p' gutterBottom>
        The goal of Node Identity Auth is to be as simple as possible, and to be as flexible as possible. Imagine importing an authentication library into your API and initializing it with some basic information like a database connection string and a secret key and it just works. Once running, you have a full stack user management system that is extremely easy to use with the option of its own user interface or a full array of components to use in your app development.
      </Typography>
      <Paper sx={{ padding: '1em' }}>
        <Typography variant='body2' component='p' gutterBottom>
          The Node Identity Auth API
        </Typography>
        <ul>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              "import NodeIdentityAuth from '@NodeIdentity/Auth" - This is the import statement that will be used to import the Node Identity Auth library. (not available yet)
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              "NodeIdentityAuth.start(config)" - This is the function that will be used to start the Node Identity Auth library. (not available yet)
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              "config" - This will be the configuration object that will be used to start the Node Identity Auth library for the database connection and other necessaries. (not available yet)
            </Typography>
          </li>
        </ul>
        <Typography variant='body2' component='p' gutterBottom>
          The Node Identity Auth UI
        </Typography>
        <ul>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              Built in UI - With the config object, you will be able to direct the user to the login page, and then have the user enter their credentials. Once they have entered their credentials, the user will be redirected to the home page.
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              Custom UI - Also the config object, you can supply a custom UI component to be used for the login page.
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              Fully Custom - You will be able to interact with the API in whatever manner your wish from you primary site with built in and custom components.
            </Typography>
          </li>
        </ul>
        <Typography variant='body2' component='p' gutterBottom>
          State Management
        </Typography>
        <ul>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              Both the API and the UI will have a state management system built in. The default configuration will use Sessions, with the option for other means, such as cookies.
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              With the API being developed along side{' '}
              <Link href='/libraries?tab=1' sx={{ textDecoration: 'none', color: '#266E6E' }}>
                Node Identity DB
              </Link>
              , state management will be configurable with most data configurations available, to include both relational and BSON based storage systems.
            </Typography>
          </li>
          <li>
            <Typography variant='body2' component='p' gutterBottom>
              The{' '}
              <Link href='/libraries?tab=2' sx={{ textDecoration: 'none', color: '#266E6E' }}>
                NI Component Library
              </Link>{' '}
              will contain a full array of drop in components to use with React's Context Api, Redux Tool Kit, and Zustand.
            </Typography>
          </li>
        </ul>
      </Paper>
    </Paper>
  )
}
