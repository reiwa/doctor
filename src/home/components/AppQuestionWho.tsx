import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionWho: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = (value: string) => {
    onNext(['who', value])
  }

  return (
    <AppQuestion text={'相談したいのは誰ですか？'}>
      <Button color={'primary'} onClick={() => onSubmit('agent')}>
        {'自分以外（家族・友人など）'}
      </Button>
      <Button color={'primary'} onClick={() => onSubmit('principal')}>
        {'自分'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionWho
