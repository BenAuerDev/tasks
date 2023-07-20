import { Moment } from 'moment'

export interface TaskForm {
  uuid: string
  text: string
  priority: number
  subtasks: Subtask[] | []
}

export interface Task extends TaskForm {
  open: boolean
  created: Moment
  completed: Moment | null
}

export interface Subtask {
  uuid: string
  open: boolean
  text: string
}
