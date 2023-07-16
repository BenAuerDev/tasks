<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../store/task'

const { addTask } = useTaskStore()

const isOpen = ref(false)

const submit = (text: string) => {
  addTask(text)
  isOpen.value = false
}
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="isOpen" width="600">
      <template v-slot:activator="{ props }">
        <v-btn color="blue-lighten-1" v-bind="props"> Add Task </v-btn>
      </template>

      <v-card>
        <div class="m-8 w-full max-w-lg border border-gray-400 p-8">
          <FormKit
            id="task-form"
            name="task-form"
            type="form"
            submit-label="Create task"
            @submit="(input) => submit(input.text)"
          >
            <p class="mb-4 text-2xl">Add a new task</p>

            <FormKit
              type="text"
              placeholder="What's the goal?"
              name="text"
              validation="required"
            />
          </FormKit>
        </div>
        <v-btn color="blue-lighten-1" @click="isOpen = false">Cancel</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
