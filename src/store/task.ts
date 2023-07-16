import moment from 'moment'
import { defineStore } from 'pinia'
import { Task } from '../types/task'

interface TaskArray {
  tasks: Task[]
}

export const useTaskStore = defineStore('tasks', {
  state: (): TaskArray => ({
    tasks: [],
  }),
  getters: {
    getOpenTasks: (state: TaskArray) => state.tasks.filter((task) => task.open),
    getFinishedTasks: (state: TaskArray) =>
      state.tasks.filter((task) => !task.open),
  },
  actions: {
    addTask(text: string) {
      this.tasks.push({
        open: true,
        text: text,
        created: moment(),
        completed: null, // TODO: check if there is a smarter initial value for completed
      })
    },
    toggleTaskStatus: (task: Task) => {
      if (task.open) {
        task.completed = moment()
        task.open = false
      } else {
        task.completed = null
        task.open = true
      }
    },
  },
  persist: {
    storage: sessionStorage,
  },
})
