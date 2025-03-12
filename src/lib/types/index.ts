export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: 'user' | 'politician' | 'admin';
  verified: boolean;
  bio?: string;
  position?: string;
  party?: string;
  state?: string;
  followers: string[];
  following: string[];
  createdAt: Date;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  images: string[];
  likes: string[];
  reposts: string[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
  isOfficial: boolean;
  type: 'press' | 'official' | 'speech' | 'action';
  source: string;
  sourceUrl: string;
  topics: string[];
}

export interface Comment {
  id: string;
  authorId: string;
  content: string;
  likes: string[];
  createdAt: Date;
  replies?: Comment[];
}

export interface Topic {
  id: string;
  name: string;
  description?: string;
  followersCount: number;
  postsCount: number;
} 