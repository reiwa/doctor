import { indigo, teal } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const createTheme = (dark = false) => {
  return createMuiTheme({
    palette: {
      primary: { main: indigo.A700 },
      secondary: { main: teal.A700 },
      type: dark ? 'dark' : 'light',
    },
    typography: { fontFamily: ['Helvetica', 'Roboto', 'sans-serif'].join(',') },
  })
}
