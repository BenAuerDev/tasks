import { defineStore } from "pinia"
import { Task } from "../types/task"

interface TaskArray {
  tasks: Task[]
}

export const useTaskStore = defineStore("tasks", {
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
      this.tasks.push({ open: true, text: text })
    },
    closeTask: (task: Task) => (task.open = false),
  },
  persist: {
    storage: sessionStorage,
  },
})
