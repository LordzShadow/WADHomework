<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header class="header">
      <h1>Title of this cool page</h1>
      <NavBar></NavBar>
  </header>
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
}
</style>
