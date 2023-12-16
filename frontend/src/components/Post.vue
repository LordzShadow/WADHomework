<template>
  <div class="post">
    <div class="post-header">
      <div class="author">
        <img class="post-icon" src="@/assets/images/me.png" alt="User icon" />
        <span>{{ post.author }}</span>
      </div>
      <span>{{ post.date }}</span>
    </div>
    <div v-if="post.body" class="post-body">
      <p>{{ post.body }}</p>
    </div>
    <img v-if="post.image" class="post-image" :src="post.image.url" :alt="post.image.name" />
    <div class="post-footer">
      <img class="post-icon" src="@/assets/images/like.png" alt="Post reaction" @click="likePost(post.id)" />
      <span>{{ post.likes }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types'
defineProps<{ post: Post }>()
</script>

<script lang="ts">
export default {
  methods: {
    likePost(postId: number) {
      this.$store.commit('likePost', { id: postId })
    }
  }
}
</script>

<style scoped>
.post {
  text-align: justify;
  padding: 10px;
  margin: 10px 12px;
  width: 100%;
  max-width: 800px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--color-background-soft);
  height: max-content;
}

.post-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
}

.author {
  display: flex;
  gap: 4px;
  align-items: center;
}

.post-icon {
  width: 20px;
  height: auto;
}

@media (prefers-color-scheme: dark) {
  .author .post-icon {
    filter: invert(98%) sepia(5%) saturate(70%) hue-rotate(339deg) brightness(117%) contrast(84%);
  }
}

.post-image {
  max-width: 100%;
  padding-bottom: 1rem;
  border-radius: 10px;
}

.post-body {
  margin: 5px auto 5px;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: min-content;
  width: 100%;
  max-width: 100%;
  height: max-content;
}

.postFooter {
  display: flex;
  justify-content: left;
  min-width: min-content;
  width: 100%;
  height: 20px;
}
</style>
