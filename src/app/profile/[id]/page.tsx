import { notFound } from 'next/navigation'
import Image from 'next/image'
import Feed from '@/components/Feed'
import { User } from '@/lib/types'

// This will be replaced with actual data fetching
async function getProfile(id: string): Promise<User | null> {
  // Mock data for now
  return {
    uid: id,
    email: 'senator@example.com',
    displayName: 'Senator Smith',
    photoURL: '',
    role: 'politician',
    verified: true,
    bio: 'Serving the people as your Senator. Fighting for better infrastructure, healthcare, and education.',
    position: 'Senator',
    party: 'Independent',
    state: 'California',
    followers: [],
    following: [],
    createdAt: new Date()
  }
}

export default async function ProfilePage({
  params
}: {
  params: { id: string }
}) {
  const profile = await getProfile(params.id)

  if (!profile) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-start space-x-4">
          <div className="relative w-24 h-24">
            {profile.photoURL ? (
              <Image
                src={profile.photoURL}
                alt={profile.displayName}
                fill
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
            )}
            {profile.verified && (
              <div className="absolute -right-1 -bottom-1 bg-white rounded-full p-1">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">{profile.displayName}</h1>
              <span className="text-gray-500">@{profile.uid}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 mt-1">
              <span>{profile.position}</span>
              <span>•</span>
              <span>{profile.party}</span>
              <span>•</span>
              <span>{profile.state}</span>
            </div>
            <p className="mt-4 text-gray-700">{profile.bio}</p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="text-sm">
                <span className="font-semibold">{profile.followers.length}</span>{' '}
                <span className="text-gray-500">Followers</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold">{profile.following.length}</span>{' '}
                <span className="text-gray-500">Following</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
        <Feed />
      </div>
    </div>
  )
} 