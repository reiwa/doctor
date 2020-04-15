import { Result } from './result'

export type ResultValue =
  | ['age', NonNullable<Result['age']>]
  | ['breathlessness', NonNullable<Result['breathlessness']>]
  | ['contact', NonNullable<Result['contact']>]
  | ['disease', Result['disease']]
  | ['familyDoctor', NonNullable<Result['familyDoctor']>]
  | ['fever', NonNullable<Result['fever']>]
  | ['feverSince', NonNullable<Result['feverSince']>]
  | ['pregnancy', NonNullable<Result['pregnancy']>]
  | ['symptoms', Result['symptoms']]
  | ['symptoms119ForAdult', Result['symptoms119ForAdult']]
  | ['symptoms119ForChild', Result['symptoms119ForChild']]
  | ['temperature', NonNullable<Result['temperature']>]
  | ['travel', NonNullable<Result['travel']>]
  | ['travelArea', NonNullable<Result['travelArea']>]
  | ['travelDate', NonNullable<Result['travelDate']>]
  | ['who', NonNullable<Result['who']>]
