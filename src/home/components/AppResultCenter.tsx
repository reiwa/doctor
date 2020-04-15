import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'

const AppResultCenter: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.message}>
        <Typography style={{ fontWeight: 'bold' }} variant={'h5'}>
          {'RESULT: Center'}
        </Typography>
      </div>
    </Fragment>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    message: {
      alignItems: 'center',
      display: 'grid',
      height: '100%',
      maxWidth: breakpoints.values.sm,
      paddingLeft: spacing(4),
      paddingRight: spacing(4),
      width: '100%',
      [breakpoints.up('sm')]: { alignItems: 'center' },
    },
  }
})

export default AppResultCenter