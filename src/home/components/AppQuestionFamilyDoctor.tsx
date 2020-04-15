import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionFamilyDoctor: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = (value: boolean) => {
    onNext(['familyDoctor', value])
  }

  return (
    <AppQuestion text={'かかりつけ医はいますか？'}>
      <Button color={'primary'} onClick={() => onSubmit(false)}>
        {'いいえ'}
      </Button>
      <Button color={'primary'} onClick={() => onSubmit(true)}>
        {'はい'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionFamilyDoctor
