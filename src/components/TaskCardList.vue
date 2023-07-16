<script setup lang="ts">
import { getTimeDifference } from '../../src/utils/getTimeDifference.ts'
import { useTaskStore } from '../store/task'
import { Task } from '../types/task'
import SubTaskList from './tasks/subTaskList.vue'

defineProps<{
  tasks: Task[]
}>()

const { toggleTaskStatus } = useTaskStore()

const hasSubTask = (task: Task) => {
  return task.subTasks.length > 1
}
</script>

<template>
  <v-fade-transition :group="true" leave-absolute>
    <v-sheet
      v-for="task in tasks"
      :key="task.text"
      elevation="4"
      :class="`d-flex justify-center gap-y-2 px-6 py-4 ${
        hasSubTask(task) ? 'flex-column' : 'flex-column-reverse'
      }`"
    >
      <div class="flex w-full items-center justify-between">
        <div>
          <p class="text-sm text-gray-600">
            {{ task.completed ? 'created: ' : '' }}
            {{ getTimeDifference(task.created) }}
          </p>

          <p class="text-sm text-gray-600" v-if="task.completed">
            completed:
            {{ getTimeDifference(task.completed) }}
          </p>
        </div>

        <v-btn
          @click="() => toggleTaskStatus(task)"
          :class="`${task.open ? 'text-gray' : 'text-green'} -m-3`"
          variant="plain"
          rounded="xl"
          size="48"
        >
          <v-icon
            :size="`${hasSubTask(task) ? '32' : '24'}`"
            :icon="`${
              task.open ? 'mdi-circle-outline' : 'mdi-check-circle-outline'
            }`"
          />
        </v-btn>
      </div>

      <p class="w-full text-center text-2xl">{{ task.text }}</p>

      <SubTaskList v-if="hasSubTask(task)" :sub-tasks="task.subTasks" />
    </v-sheet>
  </v-fade-transition>
</template>
