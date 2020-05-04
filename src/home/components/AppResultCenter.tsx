import { Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'

const AppResultCenter: FunctionComponent = () => {
  return (
    <Fragment>
      <div className={''}>
        <Typography style={{ fontWeight: 'bold' }} variant={'h5'}>
          {'RESULT: Center'}
        </Typography>
      </div>
    </Fragment>
  )
}

export default AppResultCenter
