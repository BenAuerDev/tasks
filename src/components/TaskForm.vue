<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTaskStore } from '../store/task'
import { TaskForm } from '../types/task'

const { addTask } = useTaskStore()
const router = useRouter()

const submit = (task: TaskForm) => {
  addTask(task)
  router.push('/')
}
</script>

<template>
  <div class="m-8 w-full max-w-lg border border-gray-400 p-8">
    <FormKit
      id="task-form"
      name="task-form"
      type="form"
      submit-label="Create task"
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
        label="Priority"
        min="1"
        value="3"
        max="10"
      />

      <FormKit
        id="subTasks"
        type="repeater"
        name="subTasks"
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
    </FormKit>
  </div>
</template>
