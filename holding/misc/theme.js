import { createTheme } from '@mui/material/styles'

// Create a theme instance.
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#272ab0',
//     },
//     secondary: {
//       main: '#9c27b0',
//     },
//     error: {
//       main: '#E91E63',
//     },
//     // warning: {
//     //   // main: red.A400,
//     //   main: '#E92C2C',
//     // },
//     info: {
//       main: '#57acdc',
//     },
//     success: {
//       main: '#60c689',
//     },
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   },
// })

export const theme = {
  palette: {
    primary: {
      main: '#272ab0',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#E91E63',
    },
    // warning: {
    //   // main: red.A400,
    //   main: '#E92C2C',
    // },
    info: {
      main: '#57acdc',
    },
    success: {
      main: '#60c689',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
}

const Theme = {}

Theme.dark = createTheme({
  ...theme.palette,
  mode: 'dark',
})

Theme.light = createTheme({
  ...theme.palette,
  mode: 'light',
})

export default Theme
