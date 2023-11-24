
<script setup lang="ts">
import Post from '@/components/Post.vue';
</script>

<template>
  <div class="posts">
    <div v-for="n in 10" :key="n" class="center">
      <Post></Post>
    </div>
  </div>
</template>

<style>
.posts {
  width: 100%;
  display: grid;
  grid-template-columns: [left] 1fr [center] 4fr [right] 1fr;
  gap: 1rem;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .posts {
    grid-template-columns: [center] 1fr;
  }
}

.center {
  grid-column-start: center;
  justify-self: center;
}
</style>