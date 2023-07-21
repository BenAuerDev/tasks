<script setup lang="ts">
import { useTaskStore } from '../../store/task'

const props = defineProps<{
  actions: string[]
  taskUuid: string
}>()

const { deleteTask } = useTaskStore()

const handleMenuItemClick = (action: string) => {
  switch (action) {
    case 'delete':
      deleteTask(props.taskUuid)
      break
  }
}
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-dots-vertical"
        v-bind="props"
        elevation="0"
        class="mr-n3"
      />
    </template>
    <v-list>
      <v-list-item
        v-for="(action, index) in actions"
        :key="index"
        :value="index"
      >
        <RouterLink v-if="action === 'Edit'" :to="`/edit-task/${taskUuid}/`">
          {{ action }}
        </RouterLink>

        <button v-else @click="() => handleMenuItemClick(action)">
          {{ action }}
        </button>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
