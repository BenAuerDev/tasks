<script setup lang="ts">
import TaskForm from '../components/TaskForm.vue'
import { useTaskStore } from '../store/task'

const { tasks, getOpenTasks, getFinishedTasks } = useTaskStore()

</script>

<template>
    <div>Overview page soon to come...</div>


    <TaskForm />

    <div>{{ tasks }}</div>

    <div>{{ getOpenTasks }}</div>

    <div>{{ getFinishedTasks }}</div>
</template>
