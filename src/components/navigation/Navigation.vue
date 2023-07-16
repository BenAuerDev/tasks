<script setup lang="ts">
import NavigationLink from './NavigationLink.vue'
</script>

<template>
  <nav>
    <div class="flex h-16 bg-blue-400 shadow-md">
      <NavigationLink to="/" text="Overview" />

      <v-divider vertical></v-divider>

      <NavigationLink to="/completed" text="Completed Tasks" />
    </div>
  </nav>
</template>
