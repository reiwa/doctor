import { indigo, teal } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
import { Shadows } from '@material-ui/core/styles/shadows'
import { hexToRgba } from './helpers/hexToRgba'

export const createTheme = (dark = false) => {
  const { shadows, palette } = createMuiTheme({
    palette: { type: dark ? 'dark' : 'light' },
  })

  const primary = indigo.A400

  const shadow = `0 0 24px 2px ${palette.divider}`

  return createMuiTheme({
    overrides: {
      MuiOutlinedInput: {
        inputMarginDense: { paddingBottom: 12, paddingTop: 12 },
      },
      MuiButton: {
        containedPrimary: {
          boxShadow: `0 0 4px 2px ${hexToRgba(primary, 0.2)}`,
        },
        sizeLarge: { padding: '8px 22px' },
      },
    },
    palette: {
      primary: { main: primary },
      secondary: { main: teal.A700 },
      type: dark ? 'dark' : 'light',
    },
    props: { MuiButton: { size: 'large', variant: 'contained' } },
    shadows: shadows.map((_, i) => (i === 0 ? 'none' : shadow)) as Shadows,
    shape: { borderRadius: 8 },
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
