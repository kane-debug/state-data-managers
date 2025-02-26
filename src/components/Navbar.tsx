"use client";

import Link from 'next/link'
import { useAuth } from '@/lib/hooks/useAuth'
import Image from 'next/image'

export default function Navbar() {
  const { user, signOut } = useAuth()

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-blue-600">
              PolitiConnect
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/feed" className="text-gray-700 hover:text-blue-600">
                Feed
              </Link>
              <Link href="/topics" className="text-gray-700 hover:text-blue-600">
                Topics
              </Link>
              <Link href="/politicians" className="text-gray-700 hover:text-blue-600">
                Politicians
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/create-post" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Post
                </Link>
                <div className="flex items-center space-x-3">
                  <Link href={`/profile/${user.uid}`}>
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName || 'Profile'}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    )}
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="space-x-2">
                <Link href="/signin" className="text-gray-600 hover:text-gray-800">
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 