import moment from 'moment'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { SubTask, Task, TaskForm } from '../types/task'

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
    addTask(task: TaskForm) {
      this.tasks.push({
        uuid: uuidv4(),
        open: true,
        text: task.text,
        created: moment(),
        completed: null, // TODO: check if there is a smarter initial value for completed
        priority: task.priority,
        subTasks: task.subTasks.length
          ? task.subTasks.map((subTask: SubTask) => {
              return {
                uuid: uuidv4(),
                open: true,
                text: subTask.text,
              }
            })
          : [],
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
    toggleSubTaskStatus: (subTask: SubTask) => {
      subTask.open = !subTask.open
    },
  },
  persist: {
    storage: sessionStorage,
  },
})
