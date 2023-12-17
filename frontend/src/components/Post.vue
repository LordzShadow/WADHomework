<template>
  <div class="post">
    <div class="post-header">
      <span>{{ post.date }}</span>
    </div>
    <div v-if="post.body" class="post-body">
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types'
defineProps<{ post: Post }>()
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
