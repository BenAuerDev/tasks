<script setup lang="ts">
import { Task } from '../types/task'
import { useTaskStore } from '../store/task';

defineProps<{
  tasks: Task[]
}>()


const { toggleTaskStatus } = useTaskStore()

</script>

<template>
  <v-sheet v-for="task in tasks" :key="task.text" position="relative" elevation="4" height="100"
    class="d-flex flex-column justify-center items-center relative my-2">

    <v-btn @click="() => toggleTaskStatus(task)" :class="`${task.open ? 'text-gray' : 'text-green'} right-2 top-2 w-min`"
      variant="plain" position="absolute" icon="mdi-check-circle-outline" rounded="xl" />

    <p class="text-xl">{{ task.text }}</p>
  </v-sheet>
</template>
