import { Button } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionTravelDate: FunctionComponent<Props> = ({ onNext }) => {
  const onSubmit = () => {
    onNext(['travelArea', 'sample'], ['travelDate', '2020-01-01'])
  }

  return (
    <AppQuestion
      secondText={'地域名・国名を選択してください'}
      text={
        '過去14日以内に海外に行ったことがある、または行った人と接触したことがありますか？'
      }
    >
      <Button color={'primary'} onClick={onSubmit}>
        {'次へ'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionTravelDate
