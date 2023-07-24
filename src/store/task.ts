import moment from 'moment'
import { defineStore } from 'pinia'
import { Subtask, Task } from '../types/task'

interface TaskArray {
  tasks: Task[]
}

export const useTaskStore = defineStore('tasks', {
  state: (): TaskArray => ({
    tasks: [],
  }),
  getters: {
    getOpenTasks: (state: TaskArray) => state.tasks.filter((task) => task.open),
    getCompletedTasks: (state: TaskArray) =>
      state.tasks.filter((task) => !task.open),
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    updateTask(task: Task) {
      const taskToUpdate = this.tasks.find(
        (search) => search.uuid === task.uuid
      )

      // @ts-ignore
      const index = this.tasks.indexOf(taskToUpdate)
      this.tasks.splice(index, 1, task)
    },
    deleteTask(uuid: string) {
      const task = this.tasks.find((task) => task.uuid === uuid)

      if (
        window.confirm('Are you sure you want to delete this task?') &&
        task
      ) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
      }
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
    toggleSubTaskStatus: (subtask: Subtask) => {
      subtask.open = !subtask.open
    },
  },
  persist: {
    storage: sessionStorage,
  },
})
