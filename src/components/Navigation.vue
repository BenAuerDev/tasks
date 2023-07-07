<script setup lang="ts"></script>

<template>
  <v-card height="75">
    <v-layout>
      <v-app-bar height="75" color="light-blue-darken-3">
        <div class="flex justify-evenly items-center w-full h-full">
          <RouterLink class="text-lg" to="/">Overview</RouterLink>
          <RouterLink class="text-lg" to="/finished">Finished Tasks</RouterLink>
        </div>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>
