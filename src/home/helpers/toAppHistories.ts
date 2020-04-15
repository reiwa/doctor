import { AppHistory } from '../types/appHistory'
import { Result } from '../types/result'
import { toAppHistory } from './toAppHistory'

export const toAppHistories = (result: Result) => {
  return (histories: AppHistory[]) => {
    const current = histories[histories.length - 1]

    if (current === null) {
      return [...histories]
    }

    return [...histories, toAppHistory(result, current)]
  }
}
