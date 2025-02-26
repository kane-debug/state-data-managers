"use client";

import Link from 'next/link'
import { useState } from 'react'
import { Topic } from '@/lib/types'

export default function TrendingTopics() {
  const [topics] = useState<Topic[]>([
    {
      id: '1',
      name: 'Infrastructure',
      description: 'Discussion about national infrastructure projects',
      followersCount: 12500,
      postsCount: 450
    },
    {
      id: '2',
      name: 'Healthcare',
      description: 'Healthcare policy and reform',
      followersCount: 15000,
      postsCount: 620
    },
    {
      id: '3',
      name: 'ClimateAction',
      description: 'Climate change and environmental policy',
      followersCount: 18200,
      postsCount: 780
    },
    {
      id: '4',
      name: 'Education',
      description: 'Education policy and reform initiatives',
      followersCount: 9800,
      postsCount: 320
    }
  ])

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
      <div className="space-y-4">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/topic/${topic.name.toLowerCase()}`}
            className="block group"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                  #{topic.name}
                </h3>
                <p className="text-sm text-gray-500">{topic.description}</p>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                  <span>{topic.postsCount.toLocaleString()} posts</span>
                  <span>{topic.followersCount.toLocaleString()} followers</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 