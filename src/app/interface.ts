export interface UserData {
  userId: number;
  name: string;
  mail: string;
  password: string;
  gender: string;
  age: number;
  number: string;
  comments: Comment[];
  announcements: Announcement[];
}

export interface Comment {
  userName: string;
  comment: string;
}

export interface Announcement {
  annId: number;
  category: string;
  title: string;
  description: string;
  date: string;
}
export interface NewUser {
  id?: number;
  favorites?: Announcement[];
  name?: string;
  mail?: string;
  login?: string;
  password?: string;
  gender?: string;
  age?: number;
  number?: string;
}
