<script setup lang="ts">
import { useTaskStore } from '../store/task'
import { Task } from '../types/task'

defineProps<{
  tasks: Task[]
}>()

const { toggleTaskStatus } = useTaskStore()
</script>

<template>
  <v-fade-transition :group="true" leave-absolute>
    <v-sheet
      v-for="task in tasks"
      :key="task.text"
      position="relative"
      elevation="4"
      height="100"
      class="d-flex flex-column relative my-2 items-center justify-center"
    >
      <v-btn
        @click="() => toggleTaskStatus(task)"
        :class="`${task.open ? 'text-gray' : 'text-green'} right-2 top-2 w-min`"
        variant="plain"
        position="absolute"
        icon="mdi-check-circle-outline"
        rounded="xl"
      />

      <p class="text-xl">{{ task.text }}</p>
    </v-sheet>
  </v-fade-transition>
</template>
