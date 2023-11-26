export interface Post {
  id: number
  author: string
  date: Date | string
  body?: string
  image?: PostImage
  likes: number
}

export interface PostImage {
  url: string
  name?: string
}
