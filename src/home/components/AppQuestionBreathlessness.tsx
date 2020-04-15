import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionBreathlessness: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = (value: boolean) => {
    onNext(['breathlessness', value])
  }

  return (
    <AppQuestion
      text={'強いだるさ（倦怠感）や息苦しさ（呼吸困難）がありますか？'}
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

export default AppQuestionBreathlessness
