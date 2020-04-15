import { AppDisease } from './appDisease'
import { AppSymptom } from './appSymptom'
import { AppSymptom119 } from './appSymptom119'

export type Result = {
  age: number | null
  breathlessness: boolean | null
  contact: boolean | null
  disease: AppDisease[]
  familyDoctor: boolean | null
  fever: boolean | null
  feverSince: string | null
  pregnancy: boolean | null
  symptoms119ForAdult: AppSymptom119[]
  symptoms119ForChild: AppSymptom119[]
  symptoms: [AppSymptom, string][]
  temperature: number | null
  travel: boolean | null
  travelArea: string | null
  travelDate: string | null
  who: string | null
}
