<script setup lang="ts">
import { useTaskStore } from '../store/task'
import TaskForm from '../components/TaskForm.vue'
import TaskCardList from '../components/TaskCardList.vue'
import { storeToRefs } from 'pinia'

const { getOpenTasks } = storeToRefs(useTaskStore())

</script>

<template>
  <div class="w-full max-w-lg">
    <TaskCardList :tasks="getOpenTasks" />

    <TaskForm />
  </div>
</template>
