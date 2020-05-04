import { Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'

const AppResultNormal: FunctionComponent = () => {
  return (
    <Fragment>
      <div className={''}>
        <Typography style={{ fontWeight: 'bold' }} variant={'h5'}>
          {'RESULT: Normal'}
        </Typography>
      </div>
    </Fragment>
  )
}

export default AppResultNormal
