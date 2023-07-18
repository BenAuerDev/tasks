import { Moment } from 'moment'

export interface TaskForm {
  uuid: string
  text: string
  priority: number
  subTasks: SubTask[] | []
}

export interface Task extends TaskForm {
  open: boolean
  created: Moment
  completed: Moment | null
}

export interface SubTask {
  uuid: string
  open: boolean
  text: string
}
