import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionContact: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = (value: boolean) => {
    onNext(['contact', value])
  }

  return (
    <AppQuestion
      text={
        '過去14日以内に、感染した人や感染した疑いがある人と接触したことがありますか？'
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

export default AppQuestionContact
