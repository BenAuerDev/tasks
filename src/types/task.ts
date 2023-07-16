import { Moment } from 'moment'

export interface TaskForm {
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
  open: boolean
  text: string
}
