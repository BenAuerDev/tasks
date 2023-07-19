<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const emit = defineEmits<{
  (e: 'sorting-selected', sortingString: string): void
}>()

const computedSortingOptions = computed(() => {
  const options = [
    { value: 'created', label: 'Created' },
    { value: 'priority', label: 'Priority' },
  ]

  if (route.name === 'Completed') {
    options.push({ value: 'completed', label: 'Completed' })
  }

  return options
})
</script>

<template>
  <FormKit
    type="form"
    :actions="false"
    #default="{ value }"
    @input="
      (input) =>
        emit('sorting-selected', `${input.sortingString}-${input.order}`)
    "
  >
    <div class="flex items-baseline justify-start gap-x-4">
      <span>Sort by:</span>
      <FormKit
        type="dropdown"
        name="sortingString"
        :options="computedSortingOptions"
        value="created"
      />

      <span>Order: {{ value.order }}</span>
      <FormKit
        type="toggle"
        name="order"
        on-value="descending"
        off-value="ascending"
        value="ascending"
      />
    </div>
  </FormKit>
</template>
