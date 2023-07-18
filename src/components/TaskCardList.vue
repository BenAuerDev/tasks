<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getTimeDifference } from '../../src/utils/getTimeDifference.ts'
import { useTaskStore } from '../store/task'
import { Task } from '../types/task'
import SubTaskList from './tasks/SubTaskList.vue'

defineProps<{
  tasks: Task[]
}>()

const router = useRouter()

const { toggleTaskStatus } = useTaskStore()

const hasSubTask = (task: Task) => {
  // TODO: check if this can be done more elegantly
  return task.subTasks ? task.subTasks.length > 1 : false
}
</script>

<template>
  <v-fade-transition :group="true" leave-absolute>
    <v-sheet
      v-for="task in tasks"
      :key="task.uuid"
      elevation="4"
      @dblclick="() => router.push(`/edit-task/${task.uuid}/`)"
      :class="`d-flex cursor-pointer justify-center gap-y-2 px-6 py-4 ${
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

      <p v-if="task.priority">Priority: {{ task.priority }}</p>

      <p class="my-4 w-full text-center text-2xl">{{ task.text }}</p>

      <SubTaskList v-if="hasSubTask(task)" :sub-tasks="task.subTasks" />
    </v-sheet>
  </v-fade-transition>
</template>
