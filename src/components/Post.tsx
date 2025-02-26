import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'

interface PostProps {
  id: string
  content: string
  authorId: string
  authorName: string
  authorImage: string
  authorUsername: string
  isVerifiedPolitician: boolean
  timestamp: string
  likes: number
  comments: number
  shares: number
  hasLiked?: boolean
}

export default function Post({
  id,
  content,
  authorId,
  authorName,
  authorImage,
  authorUsername,
  isVerifiedPolitician,
  timestamp,
  likes,
  comments,
  shares,
  hasLiked = false,
}: PostProps) {
  const [isLiked, setIsLiked] = useState(hasLiked)
  const [likesCount, setLikesCount] = useState(likes)
  const { user } = useAuth()

  const handleLike = async () => {
    if (!user) return
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
    // TODO: Implement like functionality with Firebase
  }

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg mb-4">
      <div className="flex items-start space-x-3">
        <Link href={`/profile/${authorId}`}>
          <div className="relative h-12 w-12">
            <Image
              src={authorImage}
              alt={authorName}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </Link>
        <div className="flex-1">
          <div className="flex items-center">
            <Link href={`/profile/${authorId}`}>
              <span className="font-semibold hover:underline">{authorName}</span>
            </Link>
            {isVerifiedPolitician && (
              <svg className="w-5 h-5 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            )}
            <span className="text-gray-500 text-sm ml-2">@{authorUsername}</span>
            <span className="text-gray-400 text-sm ml-2">· {timestamp}</span>
          </div>
          <p className="mt-2 text-gray-900">{content}</p>
          <div className="mt-3 flex items-center space-x-8">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 ${
                isLiked ? 'text-red-500' : 'text-gray-500'
              } hover:text-red-500`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span>{likesCount}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>{shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 