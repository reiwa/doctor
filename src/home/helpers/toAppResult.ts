import { Result } from '../types/result'
import { ResultValue } from '../types/resultValue'

export const toAppResult = (records: ResultValue[]) => {
  return (result: Result) => {
    const state = { ...result }

    for (const record of records) {
      if (record[0] === 'age') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'breathlessness') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'contact') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'disease') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'familyDoctor') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'fever') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'feverSince') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'pregnancy') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'symptoms119ForAdult') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'symptoms119ForChild') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'symptoms') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'temperature') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'travel') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'travelArea') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'travelDate') {
        state[record[0]] = record[1]
      }

      if (record[0] === 'who') {
        state[record[0]] = record[1]
      }
    }

    return state
  }
}
