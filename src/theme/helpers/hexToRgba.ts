import { hexToRgb } from '@material-ui/core/styles'

export const hexToRgba = (hex: string, alpha: number) => {
  return hexToRgb(hex).replace(')', `, ${alpha})`)
}
