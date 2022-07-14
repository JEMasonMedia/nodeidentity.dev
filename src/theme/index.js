import { createTheme, responsiveFontSizes } from '@mui/material/styles'
// import LightTheme from './LightTheme'
// import DarkTheme from './DarkTheme'

export const DEFAULT_THEME = 'dark'

const theme = {
  primary: { main: '#2820B2' }, //
  secondary: { main: '#7020b2' },
  warning: { main: '#b220ab' }, //
  error: { main: '#b22720' }, //
  info: { main: '#266E6E' },
  success: { main: '#339333' },
  contrastThreshold: 3,
  tonalOffset: 0.2,
}

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      ...theme,
      mode: 'light',
    },
  })
)

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      ...theme,
      mode: 'dark',
    },
  })
)

export const globalStyles = `
  :root {
    body {
      background-color: #F5F5F5;
      color: #121212;
    }
  }

  [data-theme='dark'] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`
