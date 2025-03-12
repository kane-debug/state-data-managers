"use client";

import { useState } from 'react'
import PostCard from './PostCard'
import { Post } from '@/lib/types'

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([
    // Temporary mock data
    {
      id: '1',
      authorId: 'user1',
      content: 'Discussing the new infrastructure bill and its implications for our communities. What are your thoughts?',
      images: [],
      likes: [],
      reposts: [],
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      topics: ['Infrastructure', 'Economy'],
      isOfficial: true,
      type: 'official',
      source: 'Official Statement',
      sourceUrl: 'https://example.com/statement'
    },
    // Add more mock posts as needed
  ])

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {posts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No posts to display. Follow some politicians to see their updates.
        </div>
      )}
    </div>
  )
} 