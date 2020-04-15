import { AppHistory } from '../types/appHistory'
import { Result } from '../types/result'

export const toAppHistory = (result: Result, history: string): AppHistory => {
  if (history === 'who') {
    return 'age'
  }

  if (history === 'age') {
    if (result.age !== null && result.age < 16) {
      return 'symptoms119ForChild'
    }

    return 'symptoms119ForAdult'
  }

  if (history === 'symptoms119ForChild' || history === 'symptoms119ForAdult') {
    return 'fever'
  }

  if (history === 'fever') {
    if (result.fever) {
      return 'temperature'
    }

    return 'symptoms'
  }

  if (history === 'temperature') {
    return 'symptoms'
  }

  if (history === 'symptoms') {
    return 'breathlessness'
  }

  if (history === 'breathlessness') {
    if (result.breathlessness) {
      return 'disease'
    }

    return 'pregnancy'
  }

  if (history === 'disease' || history === 'pregnancy') {
    return 'contact'
  }

  if (history === 'contact') {
    return 'travel'
  }

  if (history === 'travel') {
    if (result.travel) {
      return 'travelDate'
    }

    return 'familyDoctor'
  }

  if (history === 'travelDate') {
    return 'familyDoctor'
  }

  return null
}
