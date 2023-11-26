import { mockPosts } from '@/consts'
import type { Post } from '@/types'
import type { InjectionKey } from 'vue'
import { Store, createStore } from 'vuex'

export interface State {
  posts: Post[]
}

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

// define injection key
export const storeKey: InjectionKey<Store<State>> = Symbol()

export const appStore = createStore<State>({
  state() {
    return {
      posts: mockPosts
    }
  },
  mutations: {
    likePost(state: State, payload: { id: number }) {
      const post = state.posts.find((post) => post.id === payload.id)
      if (post) {
        post.likes++
      }
    },
    resetLikes(state: State) {
      state.posts.forEach((post: Post) => {
        post.likes = 0
      })
    }
  }
})
