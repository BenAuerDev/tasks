<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TaskCardList from '../components/TaskCardList.vue'
import { useTaskStore } from '../store/task'

const { getCompletedTasks } = storeToRefs(useTaskStore())
</script>

<template>
  <div class="my-4 flex w-full max-w-lg flex-col gap-y-2">
    <TaskCardList :tasks="getCompletedTasks" />
  </div>
</template>
