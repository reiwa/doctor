import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { toCheckboxValue } from '../helpers/toCheckboxValue'
import { useAppQuestions119 } from '../hooks/useAppQuestions119'
import { AppSymptom119 } from '../types/appSymptom119'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionDisease: FunctionComponent<Props> = ({ onNext }) => {
  const [values, setValue] = useState<AppSymptom119[]>([])

  const questions = useAppQuestions119()

  const onSubmit = () => {
    onNext(['disease', []])
  }

  return (
    <AppQuestion text={'以下の病気がありますか？'}>
      <FormGroup>
        {questions.child.map(([value, text]) => (
          <FormControlLabel
            key={value}
            control={
              <Checkbox
                checked={values.includes(value)}
                color={'primary'}
                onChange={() => setValue(toCheckboxValue(value))}
              />
            }
            label={text}
          />
        ))}
      </FormGroup>
      <Button color={'primary'} onClick={onSubmit}>
        {values.length === 0 ? 'いずれにも該当しない' : '次へ'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionDisease
