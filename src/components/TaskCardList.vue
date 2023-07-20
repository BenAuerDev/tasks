<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getTimeDifference } from '../../src/utils/getTimeDifference.ts'
import { useTaskStore } from '../store/task'
import { Task } from '../types/task'
import SortingSelectionDropdown from './SortingSelectionDropdown.vue'
import SubtaskList from './tasks/SubtaskList.vue'

defineProps<{
  tasks: Task[]
}>()

const router = useRouter()

const { toggleTaskStatus } = useTaskStore()

const sortingString = ref<string>('created-ascending')

const hasSubtask = (task: Task) => {
  // TODO: check if this can be done more elegantly
  return task.subtasks ? task.subtasks.length > 1 : false
}

const sortList = (tasks: Task[], sortingString: string) => {
  let list: Task[] = []

  if (sortingString.includes('created')) {
    list = tasks.sort((a, b) => (a.created > b.created ? 1 : -1))
  } else if (sortingString.includes('priority')) {
    list = tasks.sort((a, b) => a.priority - b.priority)
  } else if (sortingString.includes('completed')) {
    list = tasks.sort((a, b) =>
      a.completed && b.completed && a.completed > b.completed ? 1 : -1
    )
  }

  if (sortingString.includes('descending')) {
    list.reverse()
  }

  return list
}
</script>

<template>
  <SortingSelectionDropdown
    :tasks="tasks"
    @sorting-selected="(selected: string) => (sortingString = selected)"
  />
  <v-fade-transition :group="true" leave-absolute>
    <v-sheet
      v-for="task in sortList(tasks, sortingString)"
      :key="task.uuid"
      elevation="4"
      @dblclick="() => router.push(`/edit-task/${task.uuid}/`)"
      :class="`d-flex cursor-pointer justify-center gap-y-2 px-6 py-4 ${
        hasSubtask(task) ? 'flex-column' : 'flex-column-reverse'
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
            :size="`${hasSubtask(task) ? '32' : '24'}`"
            :icon="`${
              task.open ? 'mdi-circle-outline' : 'mdi-check-circle-outline'
            }`"
          />
        </v-btn>
      </div>

      <p v-if="task.priority">Priority: {{ task.priority }}</p>

      <p class="my-4 w-full text-center text-2xl">{{ task.text }}</p>

      <SubtaskList v-if="hasSubtask(task)" :subtasks="task.subtasks" />
    </v-sheet>
  </v-fade-transition>
</template>
