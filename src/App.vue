<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <div class="flex w-full flex-col items-center justify-center">
    <RouterView></RouterView>
  </div>
</template>
