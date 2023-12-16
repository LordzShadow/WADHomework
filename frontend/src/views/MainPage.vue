
<script setup lang="ts">
import Post from '@/components/Post.vue';
</script>

<template>
  <div class="posts">
    <button @click="Logout" class="logout">Logout</button>
    <div v-for="post of posts" :key="post.id" class="center">
      <Post :post="post"></Post>
    </div>
    
  </div>
</template>

<script lang="ts">
export default {
  name: "MainPage",
  components: {},
  data: function() {
    return {
      posts: this.fetchPosts()
    }
  },

  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include',
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("jwt removed");

        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
    fetchPosts() {
      fetch("http://localhost:3000/posts", {
        credentials: 'include',
      })
      .then((response) => {
        if (response.status == 401 || response.status == 403) {
          this.$router.push("/login");
        }
        return response.json()
      })
      .then((data) => this.posts = data)
      .catch((e) => console.log(e.message))
    }
  }
}
</script>

<style scoped>
.logout {
  justify-self: center;
  grid-column-start: center;
}
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

</style>