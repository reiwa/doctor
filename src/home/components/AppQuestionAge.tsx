import {
  Button,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { OnNext } from '../types/onNext'
import AppQuestion from './AppQuestion'

type Props = { onNext: OnNext }

const AppQuestionAge: FunctionComponent<Props> = ({ onNext }) => {
  const [value, setValue] = useState('')

  const onSubmit = () => {
    onNext(['age', parseInt(value)])
  }

  return (
    <AppQuestion text={'年齢を入力してください'}>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position={'end'}>{'歳'}</InputAdornment>
          ),
        }}
        className={classes.textField}
        onChange={event => setValue(event.target.value)}
        type={'number'}
        value={value}
        size={'small'}
        variant={'outlined'}
      />
      <Button color={'primary'} disabled={!value} onClick={onSubmit}>
        {'次へ'}
      </Button>
    </AppQuestion>
  )
}

export default AppQuestionAge
