<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TaskCardList from '../components/TaskCardList.vue'
import TaskForm from '../components/TaskForm.vue'
import { useTaskStore } from '../store/task'

const { getOpenTasks } = storeToRefs(useTaskStore())
</script>

<template>
  <div class="w-full max-w-lg">
    <TaskCardList :tasks="getOpenTasks" />

    <TaskForm />
  </div>
</template>
