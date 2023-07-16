<script setup lang="ts">
import { getTimeDifference } from '../../src/utils/getTimeDifference.ts'
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
      class="d-flex flex-column relative my-2 justify-center gap-y-2"
    >
      <v-btn
        @click="() => toggleTaskStatus(task)"
        :class="`${task.open ? 'text-gray' : 'text-green'} right-2 top-2 w-min`"
        variant="plain"
        position="absolute"
        icon="mdi-check-circle-outline"
        rounded="xl"
      />
      <div class="mx-4">
        <p class="text-sm text-gray-600">
          {{ task.completed ? 'created: ' : '' }}
          {{ getTimeDifference(task.created) }}
        </p>

        <p class="text-sm text-gray-600" v-if="task.completed">
          completed:
          {{ getTimeDifference(task.completed) }}
        </p>
      </div>
      <p class="w-full text-center text-xl">{{ task.text }}</p>
    </v-sheet>
  </v-fade-transition>
</template>
