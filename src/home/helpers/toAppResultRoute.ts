import { Result } from '../types/result'

export const toAppResultRoute = (result: Result) => {
  // END 119 for child
  if (result.symptoms119ForChild.length !== 0) {
    return 'symptoms119ForChild'
  }

  // END 119 for adult
  if (result.symptoms119ForAdult.length !== 0) {
    return 'symptoms119ForAdult'
  }

  // need to ask Q.Travel
  if (result.travel === null && result.travelDate === null) {
    return null
  }

  // END: familyDoctor
  if (result.familyDoctor !== null && result.familyDoctor) {
    return 'familyDoctor'
  }

  // END: normal
  if (result.familyDoctor !== null && !result.familyDoctor) {
    return 'normal'
  }

  // END: Center
  return 'center'
}
