
<script setup lang="ts">
import Post from '@/components/Post.vue';
</script>

<template>
  <div class="posts">
    <div v-for="post of posts" :key="post.id" class="center">
      <Post :post="post"></Post>
    </div>
    <div class="center">
      <button class="reset-likes" @click="resetLikes()">Reset likes</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    resetLikes() {
      this.$store.commit('resetLikes');
    }
  }
}
</script>

<style scoped>
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
  display: flex;
  justify-content: center;
  grid-column-start: center;
  justify-self: center;
  width: 100%;
}

.reset-likes {
  padding: 0 12px;
  height: 28px;
  border-radius: 4px;
  background-color: var(--color-button);
  cursor: pointer;
  color: #ffff;
  border: none;
}

.reset-likes:hover {
  background-color: var(--color-button-hover);
}

.reset-likes:active {
  background-color: var(--color-button-active);
}
</style>