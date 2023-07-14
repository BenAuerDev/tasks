<script setup lang="ts">
import { reset } from '@formkit/vue'
import { useTaskStore } from '../store/task'

const { addTask } = useTaskStore()

const submit = (text: string) => {
  addTask(text)
  reset('task-form')
}
</script>

<template>
  <div class="w-full">
    <FormKit id="task-form" type="form" @submit="(input) => submit(input.text)">
      <FormKit type="text" name="text" validation="required" />
    </FormKit>
  </div>
</template>
