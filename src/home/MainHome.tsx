import React, { FunctionComponent, useState } from 'react'
import Main from './components/Main'
import AppQuestionAge from './components/AppQuestionAge'
import AppQuestionBreathlessness from './components/AppQuestionBreathlessness'
import AppQuestionContact from './components/AppQuestionContact'
import AppQuestionDisease from './components/AppQuestionDisease'
import AppQuestionFamilyDoctor from './components/AppQuestionFamilyDoctor'
import AppQuestionFever from './components/AppQuestionFever'
import AppQuestionPregnancy from './components/AppQuestionPregnancy'
import AppQuestionSymptoms from './components/AppQuestionSymptoms'
import AppQuestionSymptoms119ForAdult from './components/AppQuestionSymptoms119ForAdult'
import AppQuestionSymptoms119ForChild from './components/AppQuestionSymptoms119ForChild'
import AppQuestionTemperature from './components/AppQuestionTemperature'
import AppQuestionTravel from './components/AppQuestionTravel'
import AppQuestionTravelDate from './components/AppQuestionTravelDate'
import AppQuestionWho from './components/AppQuestionWho'
import AppResult119ForAdult from './components/AppResult119ForAdult'
import AppResult119ForChild from './components/AppResult119ForChild'
import AppResultCenter from './components/AppResultCenter'
import AppResultFamilyDoctor from './components/AppResultFamilyDoctor'
import AppResultNormal from './components/AppResultNormal'
import { toAppHistories } from './helpers/toAppHistories'
import { toAppResult } from './helpers/toAppResult'
import { toAppResultRoute } from './helpers/toAppResultRoute'
import { AppHistory } from './types/appHistory'
import { OnNext } from './types/onNext'
import { Result } from './types/result'
import { ResultValue } from './types/resultValue'

const MainHome: FunctionComponent = () => {
  const [histories, setHistories] = useState<AppHistory[]>(['who'])

  const [logs, setLogs] = useState<[AppHistory, ResultValue[]][]>([])

  const [result, setResult] = useState<Result>({
    age: null,
    breathlessness: null,
    contact: null,
    disease: [],
    familyDoctor: null,
    fever: null,
    feverSince: null,
    pregnancy: null,
    symptoms119ForAdult: [],
    symptoms119ForChild: [],
    symptoms: [],
    temperature: null,
    travel: null,
    travelArea: null,
    travelDate: null,
    who: null,
  })

  const resultRoute = toAppResultRoute(result)

  // render result view
  if (resultRoute !== null) {
    return (
      <Main>
        {resultRoute === 'symptoms119ForChild' && <AppResult119ForChild />}
        {resultRoute === 'symptoms119ForAdult' && <AppResult119ForAdult />}
        {resultRoute === 'normal' && <AppResultNormal />}
        {resultRoute === 'familyDoctor' && <AppResultFamilyDoctor />}
        {resultRoute === 'center' && <AppResultCenter />}
      </Main>
    )
  }

  const current = histories[histories.length - 1]

  const onNext: OnNext = (...records) => {
    setLogs(state => [...state, [current, records]])
    const _result = toAppResult(records)(result)
    setResult(_result)
    setHistories(toAppHistories(_result))
  }

  // render question view
  return (
    <Main>
      {current === 'age' && <AppQuestionAge onNext={onNext} />}
      {current === 'breathlessness' && (
        <AppQuestionBreathlessness onNext={onNext} />
      )}
      {current === 'contact' && <AppQuestionContact onNext={onNext} />}
      {current === 'disease' && <AppQuestionDisease onNext={onNext} />}
      {current === 'familyDoctor' && (
        <AppQuestionFamilyDoctor onNext={onNext} />
      )}
      {current === 'fever' && <AppQuestionFever onNext={onNext} />}
      {current === 'pregnancy' && <AppQuestionPregnancy onNext={onNext} />}
      {current === 'symptoms119ForAdult' && (
        <AppQuestionSymptoms119ForAdult onNext={onNext} />
      )}
      {current === 'symptoms119ForChild' && (
        <AppQuestionSymptoms119ForChild onNext={onNext} />
      )}
      {current === 'symptoms' && <AppQuestionSymptoms onNext={onNext} />}
      {current === 'temperature' && <AppQuestionTemperature onNext={onNext} />}
      {current === 'travel' && <AppQuestionTravel onNext={onNext} />}
      {current === 'travelDate' && <AppQuestionTravelDate onNext={onNext} />}
      {current === 'who' && <AppQuestionWho onNext={onNext} />}
    </Main>
  )
}

export default MainHome
