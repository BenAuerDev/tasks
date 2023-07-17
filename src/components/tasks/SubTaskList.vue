<script setup lang="ts">
import { useTaskStore } from '../../store/task'
import { SubTask } from '../../types/task'

const { toggleSubTaskStatus } = useTaskStore()

defineProps<{
  subTasks: SubTask[] | []
}>()
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <p>Subtasks:</p>

    <div v-for="subTask in subTasks" class="flex items-center justify-between">
      <div class="flex">
        <v-icon icon="mdi-circle-medium" />
        <p>{{ subTask.text }}</p>
      </div>

      <v-btn
        @click="() => toggleSubTaskStatus(subTask)"
        :class="`${
          subTask.open ? 'text-gray' : 'text-green'
        } d-flex w-min justify-end`"
        variant="plain"
        :icon="`${
          subTask.open ? 'mdi-circle-outline' : 'mdi-check-circle-outline'
        }`"
        rounded="xl"
        height="24"
        width="24"
      />
    </div>
  </div>
</template>
