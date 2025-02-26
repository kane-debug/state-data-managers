'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import { useAuth } from '@/lib/hooks/useAuth'

// Temporary mock data for demonstration
const MOCK_POSTS = [
  {
    id: '1',
    content: 'Excited to announce our new climate initiative that will create thousands of green jobs while protecting our environment.',
    authorId: 'politician1',
    authorName: 'Jane Smith',
    authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    authorUsername: 'SenatorSmith',
    isVerifiedPolitician: true,
    timestamp: '2h ago',
    likes: 1234,
    comments: 89,
    shares: 45,
  },
  {
    id: '2',
    content: 'Just finished a productive meeting with international leaders discussing global trade policies.',
    authorId: 'politician2',
    authorName: 'John Davis',
    authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    authorUsername: 'RepDavis',
    isVerifiedPolitician: true,
    timestamp: '4h ago',
    likes: 892,
    comments: 56,
    shares: 23,
  },
]

export default function Feed() {
  const { user } = useAuth()
  const [posts, setPosts] = useState(MOCK_POSTS)

  // TODO: Implement real-time posts fetching from Firebase
  useEffect(() => {
    if (!user) return
    // Fetch posts from followed politicians and users
  }, [user])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          {/* Main content */}
          <main className="lg:col-span-8">
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <textarea
                  placeholder="What's on your mind?"
                  className="w-full h-24 resize-none border-0 focus:ring-0 placeholder-gray-400 text-gray-900"
                />
                <div className="flex justify-end border-t pt-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    Post
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Suggested Politicians</h2>
              <div className="space-y-4">
                {/* TODO: Implement suggested politicians list */}
                <p className="text-gray-500">Coming soon...</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Popular Topics</h2>
              <div className="space-y-3">
                {['Infrastructure', 'Education', 'Technology', 'Defense'].map((topic) => (
                  <div key={topic} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                      #{topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
} 