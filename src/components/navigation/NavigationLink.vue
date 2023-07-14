<script setup lang="ts">
defineProps<{
  to: string
  text: string
}>()
</script>

<template>
  <RouterLink
    class="flex basis-full items-center justify-center justify-self-stretch text-lg transition-transform duration-200 hover:scale-125"
    :to="to"
  >
    {{ text }}
  </RouterLink>
</template>
