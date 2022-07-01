import { createTheme } from '@mui/material/styles'

export const DEFAULT_THEME = 'dark'

const theme = {
  primary: { main: '#272ab0' },
  secondary: { main: '#9c27b0' },
  error: { main: '#E92C2C' },
  warning: { main: '#f98600' },
  info: { main: '#57acdc' },
  success: { main: '#60c689' },
  contrastThreshold: 3,
  tonalOffset: 0.2,
}

export const lightTheme = createTheme({
  palette: {
    // primary: { main: '#9147FF' },
    // secondary: { main: '#2a48f3' },
    // error: { main: '#E91E63' },
    ...theme,
    mode: 'light',
  },
})

export const darkTheme = createTheme({
  palette: {
    // primary: { main: '#9147FF' },
    // secondary: { main: '#2a48f3' },
    // error: { main: '#E91E63' },
    ...theme,
    mode: 'dark',
  },
})

export const globalStyles = `
  :root {
    body {
      background-color: #fff;
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
