<script setup lang="ts">
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'vue-router'
import { useTaskStore } from '../store/task'
import { Subtask, Task, TaskForm } from '../types/task'

const { addTask, updateTask } = useTaskStore()
const router = useRouter()

const props = defineProps<{
  task?: Task | undefined
}>()

const cleanSubtasks = (subtasks: Subtask[]) => {
  const validSubtasks = subtasks.filter((subtask) => subtask.text)
  return validSubtasks.map((subtask) => {
    return {
      uuid: uuidv4(),
      open: true,
      text: subtask.text,
    }
  })
}

const cleanTask = (task: TaskForm) => {
  return {
    uuid: uuidv4(),
    text: task.text,
    priority: task.priority,
    open: true,
    created: moment(),
    completed: null,
    subtasks: task.subtasks ? cleanSubtasks(task.subtasks) : null,
  }
}

const submit = (task: TaskForm) => {
  if (props.task) {
    updateTask(cleanTask(task))
  } else {
    addTask(cleanTask(task))
  }
  router.push('/')
}
</script>

<template>
  <div class="m-8 w-full max-w-lg border border-gray-400 p-8">
    <FormKit
      id="task-form"
      name="task-form"
      type="form"
      :value="task"
      #default="{ value }"
      :actions="false"
      @submit="(input) => submit(input)"
    >
      <p class="mb-4 text-2xl">Add a new task</p>

      <FormKit
        type="text"
        name="text"
        label="Description"
        placeholder="What's the goal?"
        validation="required"
      />

      <FormKit
        type="range"
        name="priority"
        :label="`Priority: ${value.priority}`"
        min="1"
        value="3"
        max="10"
      />

      <FormKit
        id="subtasks"
        type="repeater"
        name="subtasks"
        label="Subtasks"
        #default="{ index }"
      >
        <FormKit
          type="text"
          :placeholder="`What is step #${index + 1}`"
          validation="length:1"
          name="text"
        />
      </FormKit>

      <div class="flex h-[42px] items-stretch">
        <FormKit type="submit">
          {{ task ? 'Update Task' : 'Create Task' }}
        </FormKit>

        <RouterLink
          to="/"
          class="border-gray align-self-stretch flex items-center justify-center rounded border px-7"
        >
          Cancel
        </RouterLink>
      </div>
    </FormKit>
  </div>
</template>
