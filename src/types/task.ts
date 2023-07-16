import { Moment } from 'moment'

export interface Task {
  open: boolean
  text: string
  created: Moment
  completed: Moment | null
  subTasks: SubTask[] | []
}

export interface SubTask {
  open: boolean
  text: string
}

export interface TaskForm {
  text: string
  subTasks: SubTask[] | []
}
