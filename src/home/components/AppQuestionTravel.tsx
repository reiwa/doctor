import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionTravel: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = (value: boolean) => {
    onNext(['travel', value])
  }

  return (
    <AppQuestion
      text={
        '過去14日以内に海外に行ったことがある、または行った人と接触したことがありますか？'
      }
    >
      <Button color={'primary'} onClick={() => onSubmit(false)}>
        {'いいえ'}
      </Button>
      <Button color={'primary'} onClick={() => onSubmit(true)}>
        {'はい'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionTravel
