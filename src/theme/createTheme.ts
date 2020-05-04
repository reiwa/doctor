import { indigo, teal } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const createTheme = (dark = false) => {
  const primary = indigo.A400

  return createMuiTheme({
    overrides: {
      MuiOutlinedInput: {
        inputMarginDense: { paddingBottom: 12, paddingTop: 12 },
      },
      MuiButton: { sizeLarge: { padding: '8px 22px' } },
    },
    palette: {
      primary: { main: primary },
      secondary: { main: teal.A700 },
      type: dark ? 'dark' : 'light',
    },
    props: { MuiButton: { size: 'large', variant: 'contained' } },
    spacing: factor => `${0.25 * factor}rem`,
    typography: {
      fontFamily: [
        'Hiragino Kaku Gothic ProN',
        'ヒラギノ角ゴ ProN W3',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'sans-serif',
      ].join(','),
    },
  })
}
