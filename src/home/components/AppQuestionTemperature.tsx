import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionTemperature: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = () => {
    onNext(['feverSince', '2020-01-01'], ['temperature', 38])
  }

  return (
    <AppQuestion
      secondText={'詳しい情報を入力してください'}
      text={'37.5度以上の発熱がありますか？'}
    >
      <Button color={'primary'} onClick={() => onSubmit()}>
        {'次へ'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionTemperature
