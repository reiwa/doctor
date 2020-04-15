import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionFever: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = (value: boolean) => {
    onNext(['fever', value])
  }

  return (
    <AppQuestion text={'37.5度以上の発熱がありますか？'}>
      <Button color={'primary'} onClick={() => onSubmit(false)}>
        {'いいえ'}
      </Button>
      <Button color={'primary'} onClick={() => onSubmit(true)}>
        {'はい'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionFever
