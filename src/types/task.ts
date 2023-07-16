import { Moment } from 'moment'

export interface Task {
  open: boolean
  text: string
  created: Moment
  completed: Moment | null
}
