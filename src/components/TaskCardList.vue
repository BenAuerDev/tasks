<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getTimeDifference } from '../../src/utils/getTimeDifference.ts'
import { useTaskStore } from '../store/task'
import { Task } from '../types/task'
import SortingSelectionDropdown from './SortingSelectionDropdown.vue'
import SubtaskList from './tasks/SubtaskList.vue'
import TaskCardMenu from './tasks/TaskCardMenu.vue'

defineProps<{
  tasks: Task[]
}>()

const router = useRouter()

const { toggleTaskStatus } = useTaskStore()

const sortingString = ref<string>('created-ascending')

const hasSubtask = (task: Task) => {
  // TODO: check if this can be done more elegantly
  return task.subtasks && task.subtasks.length
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
      class="d-flex flex-column cursor-pointer justify-center gap-y-2 px-6 py-4"
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

        <TaskCardMenu :actions="['Edit', 'Delete']" :task-uuid="task.uuid" />
      </div>

      <p class="my-4 w-full text-center text-2xl">{{ task.text }}</p>

      <div class="flex justify-between">
        <p>Priority: {{ task.priority }}</p>

        <v-tooltip text="Mark task as complete/open">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              @click="() => toggleTaskStatus(task)"
              :class="`${task.open ? 'text-gray' : 'text-green'} -m-3`"
              variant="plain"
              rounded="xl"
              size="48"
            >
              <v-icon
                :size="`${hasSubtask(task) ? '32' : '24'}`"
                icon="mdi-check-circle-outline"
              />
            </v-btn>
          </template>
        </v-tooltip>
      </div>
      <SubtaskList v-if="hasSubtask(task)" :subtasks="task.subtasks" />
    </v-sheet>
  </v-fade-transition>
</template>
