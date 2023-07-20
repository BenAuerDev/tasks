<script setup lang="ts">
import { useTaskStore } from '../../store/task'
import { Subtask } from '../../types/task'

const { toggleSubTaskStatus } = useTaskStore()

defineProps<{
  subtasks: Subtask[] | null
}>()
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <p>Subtasks:</p>

    <div
      v-for="subtask in subtasks"
      :key="subtask.uuid"
      class="flex items-center justify-between"
    >
      <div class="flex">
        <v-icon icon="mdi-circle-medium" />
        <p>{{ subtask.text }}</p>
      </div>

      <v-btn
        @click="() => toggleSubTaskStatus(subtask)"
        :class="`${
          subtask.open ? 'text-gray' : 'text-green'
        } d-flex w-min justify-end`"
        variant="plain"
        :icon="`${
          subtask.open ? 'mdi-circle-outline' : 'mdi-check-circle-outline'
        }`"
        rounded="xl"
        height="24"
        width="24"
      />
    </div>
  </div>
</template>
