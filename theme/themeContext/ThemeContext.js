import { createContext, useReducer } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from '../misc/theme'

export const ThemeContext = createContext({
  setDarkMode: val => {},
  darkMode: false,
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        darkMode: action.payload,
      }
    default:
      return state
  }
}

const initialState = {
  darkMode: false,
}

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setDarkMode = val => {
    dispatch({
      type: 'SET_THEME',
      payload: val,
    })
  }

  return (
    <ThemeContext.Provider value={{ darkMode: state.darkMode, setDarkMode }}>
      <ThemeProvider theme={state.darkMode ? Theme.dark : Theme.light}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
