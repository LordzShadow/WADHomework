<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <PageHeader></PageHeader>
  <section class="content">
    <RouterView />
  </section>
  <PageFooter></PageFooter>
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
