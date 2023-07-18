<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TaskCardList from '../components/TaskCardList.vue'
import { useTaskStore } from '../store/task'

const { getOpenTasks } = storeToRefs(useTaskStore())
</script>

<template>
  <div class="my-4 flex w-full max-w-lg flex-col gap-y-2">
    <v-btn to="/add-task/" class="bg-blue-400">
      <v-icon icon="mdi-plus-thick" />
      Add Task</v-btn
    >

    <TaskCardList :tasks="getOpenTasks" />
  </div>
</template>
