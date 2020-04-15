import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'

type Props = {
  text: string
  secondText?: string
}

const AppQuestion: FunctionComponent<Props> = ({
  children,
  secondText,
  text,
}) => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.question}>
        <Typography style={{ fontWeight: 'bold' }} variant={'h5'}>
          {`Q. ${text}`}
        </Typography>
        {secondText && <Typography>{secondText}</Typography>}
      </div>
      <div className={classes.action}>
        <div className={classes.actionItems}>{children}</div>
      </div>
    </Fragment>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    action: {
      alignItems: 'flex-end',
      display: 'grid',
      height: '100%',
      [breakpoints.up('sm')]: {
        alignItems: 'center',
      },
    },
    actionItems: {
      alignItems: 'center',
      display: 'grid',
      gridGap: spacing(2),
      paddingBottom: spacing(4),
      paddingLeft: spacing(4),
      paddingRight: spacing(4),
      [breakpoints.up('sm')]: { paddingBottom: 0 },
      [breakpoints.up('md')]: {
        gridAutoColumns: 'max-content',
        gridAutoFlow: 'column',
        justifyContent: 'flex-end',
      },
    },
    question: {
      alignContent: 'flex-end',
      display: 'grid',
      gridGap: spacing(1),
      height: '100%',
      maxWidth: breakpoints.values.sm,
      paddingLeft: spacing(4),
      paddingRight: spacing(4),
      width: '100%',
      [breakpoints.up('sm')]: {
        alignContent: 'center',
        alignItems: 'center',
      },
    },
  }
})

export default AppQuestion
