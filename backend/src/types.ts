export interface Post {
  id: number;
  body: string;
  date: Date;
}

export interface User {
  id: string;
  email: string;
  password: string;
}
