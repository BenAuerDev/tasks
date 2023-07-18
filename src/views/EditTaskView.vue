<script setup lang="ts">
import { useRoute } from 'vue-router'
import TaskForm from '../components/TaskForm.vue'
import { useTaskStore } from '../store/task'
import { Task } from '../types/task'

const route = useRoute()

const { tasks } = useTaskStore()

const getCurrentTask = (tasks: Task[]) => {
  return tasks.find((task: Task) => task.uuid === route.params.id)
}
</script>

<template>
  <div class="my-4 flex w-full max-w-lg flex-col gap-y-2">
    <TaskForm :task="getCurrentTask(tasks)" />
  </div>
</template>
