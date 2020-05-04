import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = {
  text: string
  secondText?: string
}

const AppQuestion: FunctionComponent<Props> = ({
  children,
  secondText,
  text,
}) => {
  return (
    <div className={'grid p-4 h-full rounded lg:shadow-lg'}>
      <div className={'grid items-end'}>
        <Typography style={{ fontWeight: 'bold' }} variant={'h5'}>
          {`Q. ${text}`}
        </Typography>
        {secondText && <Typography>{secondText}</Typography>}
      </div>
      <div className={'grid items-end'}>
        <div className={'grid gap-4'}>{children}</div>
      </div>
    </div>
  )
}

export default AppQuestion
