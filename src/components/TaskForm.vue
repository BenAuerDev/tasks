<script setup lang="ts">
import { useTaskStore } from '../store/task'
import { reset } from '@formkit/vue'

const { addTask } = useTaskStore()

const submit = (text: string) => {
  addTask(text)
  reset('task-form')
}
</script>

<template>
  <div class="w-full max-w-md">
    <FormKit id="task-form" type="form" @submit="(input) => submit(input)">

      <FormKit type="text" name="text" validation="required" />

    </FormKit>
  </div>
</template>
