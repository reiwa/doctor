import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const AppMain: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return <main className={classes.main}>{children}</main>
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    main: {
      alignItems: 'center',
      bottom: 0,
      display: 'grid',
      gridTemplateColumns: '1fr',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      margin: 'auto',
      maxHeight: breakpoints.values.md,
      maxWidth: breakpoints.values.sm,
      position: 'fixed',
      right: 0,
      top: 0,
      width: '100%',
      [breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr',
        justifyContent: 'space-between',
        justifyItems: 'center',
        maxWidth: breakpoints.values.lg,
        paddingLeft: spacing(4),
        paddingRight: spacing(4),
      },
    },
  }
})

export default AppMain
