import { AppSymptom119 } from '../types/appSymptom119'

export const useAppQuestions119 = (): {
  child: [AppSymptom119, string][]
  adult: [AppSymptom119, string][]
} => {
  return {
    child: [
      ['fever', '4日以上続く37.5度以上の発熱'],
      ['breathlessness', '息苦しさ'],
    ],
    adult: [
      ['fever', '4日以上続く37.5度以上の発熱'],
      ['feebleness', '強い倦怠感'],
      ['breathlessness', '息苦しさ'],
    ],
  }
}
