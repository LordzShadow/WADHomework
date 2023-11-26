import type { Post } from './types'

export const mockPosts: Post[] = [
  {
    id: 1,
    author: 'Laas Hendrik',
    date: '04.11.2023',
    body: "Hey, has anyone done the homework in WAD that's due in 2 days? We have to make the website more dynamic or something",
    likes: 2
  },
  {
    id: 2,
    author: 'Kustav',
    date: '02.11.2023',
    body: 'Just did a backflip for the first time :O \nAmazing feeling!',
    likes: 21
  },
  {
    id: 3,
    author: 'AnAppleAWeek',
    date: '01.11.2023',
    body: 'Photo by Louis Hansel on Unsplash',
    image: { url: 'https://i.ibb.co/TP5j4LV/apple.jpg', name: 'apple' },
    likes: 0
  },
  {
    id: 4,
    author: 'Kennar',
    date: '03.11.2023',
    body: 'My top 5 favourite places in Delta:\n1. 1037\n2. 3064\n3. The entrance\n4. The exit\n5. Second restroom on the right, on the other side on the wardrobe',
    likes: 18
  },
  {
    id: 5,
    author: 'MysteriousGuy',
    date: '05.11.2023',
    body: "How did I get here? Why am I stuck here, in this post? I don't know, do you? Mystery...",
    likes: 5
  },
  {
    id: 6,
    author: 'Arnold Schwarzenegger fans',
    date: '29.10.2023',
    body: 'Photo from Wikipedia',
    image: { url: 'https://i.ibb.co/yFB4Dgv/strongman.jpg', name: 'strongman' },
    likes: 21428
  },
  {
    id: 7,
    author: 'Laas Hendrik',
    date: '31.10.2023',
    body: 'Felt scary, might delete later idk. Happy Halloween!',
    image: { url: 'https://i.ibb.co/28MdBPg/halloween.jpg', name: 'halloween' },
    likes: 30
  },
  {
    id: 8,
    author: 'IWritePoems',
    date: '4.11.2023',
    body: 'Roses are red\nViolets are blue\nJSON is cool\nAnd so are you',
    likes: 50
  },
  {
    id: 9,
    author: 'John Smith',
    date: '3.11.2023',
    body: "How do I like posts? I can't see the usual 'like' icon anywhere, and the weird fleshy had icon can't be that, right?",
    likes: 11
  },
  {
    id: 10,
    author: 'mememaster',
    date: '06.11.2023',
    body: 'Like for more ;)',
    image: { url: 'https://i.ibb.co/5hWBD9C/meme.png', name: 'meme' },
    likes: 749
  }
]
