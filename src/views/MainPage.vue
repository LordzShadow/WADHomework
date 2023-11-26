
<script setup lang="ts">
import Post from '@/components/Post.vue';
</script>

<template>
  <div class="posts">
    <div v-for="post of posts" :key="post.id" class="center">
      <Post :post="post"></Post>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
}
</script>

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
  width: 100%;
}
</style>