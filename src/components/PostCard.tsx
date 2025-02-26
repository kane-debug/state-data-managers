import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/types'
import { useAuth } from '@/lib/hooks/useAuth'

interface PostCardProps {
  post: Post
}

function formatDate(dateString: string | Date): string {
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString
    if (isNaN(date.getTime())) {
      return 'Invalid date'
    }
    
    // Create a fixed format that will be consistent between server and client
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    
    // Split the formatted date into parts
    const parts = formatter.formatToParts(date)
    
    // Reconstruct the date string in a consistent format
    return `${parts.find(p => p.type === 'month')?.value} ${
      parts.find(p => p.type === 'day')?.value}, ${
      parts.find(p => p.type === 'year')?.value}, ${
      parts.find(p => p.type === 'hour')?.value}:${
      parts.find(p => p.type === 'minute')?.value} ${
      parts.find(p => p.type === 'dayPeriod')?.value}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return 'Invalid date'
  }
}

export default function PostCard({ post }: PostCardProps) {
  const { user } = useAuth()
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)

  const handleLike = () => {
    if (!user) return
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-start space-x-3">
        <Link href={post.sourceUrl || `#`}>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            {post.source === 'whitehouse.gov' && (
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            )}
          </div>
        </Link>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Link href={post.sourceUrl || `#`} className="font-semibold hover:underline">
              {post.source === 'whitehouse.gov' ? 'The White House' : post.authorId}
            </Link>
            {post.isOfficial && (
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
            <span className="text-gray-500 text-sm">
              {formatDate(post.createdAt)}
            </span>
          </div>
          <p className="mt-2 text-gray-800 whitespace-pre-wrap">{post.content}</p>
          {post.topics?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.topics.map((topic) => (
                <Link
                  key={topic}
                  href={`/topic/${topic.toLowerCase()}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  #{topic}
                </Link>
              ))}
            </div>
          )}
          {post.sourceUrl && (
            <a 
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-sm text-blue-600 hover:underline"
            >
              Read full article
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 