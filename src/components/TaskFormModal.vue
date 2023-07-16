<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../store/task'
import { TaskForm } from '../types/task'

const { addTask } = useTaskStore()

const showModal = ref(false)

const submit = (task: TaskForm) => {
  addTask(task)
  showModal.value = false
}
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="showModal" width="600">
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
            @submit="(input) => submit(input)"
          >
            <p class="mb-4 text-2xl">Add a new task</p>

            <FormKit
              type="text"
              placeholder="What's the goal?"
              name="text"
              validation="required"
            />

            <FormKit
              id="subTasks"
              type="repeater"
              name="subTasks"
              #default="{ index }"
            >
              <FormKit
                type="text"
                :placeholder="`What is step #${index + 1}`"
                name="text"
              />
            </FormKit>
          </FormKit>
        </div>
        <v-btn color="blue-lighten-1" @click="showModal = false">Cancel</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
