import { Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'

const AppResultFamilyDoctor: FunctionComponent = () => {
  return (
    <Fragment>
      <div className={''}>
        <Typography style={{ fontWeight: 'bold' }} variant={'h5'}>
          {'RESULT: Family Doctor'}
        </Typography>
      </div>
    </Fragment>
  )
}

export default AppResultFamilyDoctor
