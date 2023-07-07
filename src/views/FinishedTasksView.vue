<script setup lang="ts">
import { useTaskStore } from '../store/task'
import TaskCardList from '../components/TaskCardList.vue'
import { storeToRefs } from 'pinia'

const { getFinishedTasks } = storeToRefs(useTaskStore())

</script>

<template>
    <div class="w-full max-w-lg">
        <TaskCardList :tasks="getFinishedTasks" />
    </div>
</template>
