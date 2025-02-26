'use client';

import { useEffect, useState } from 'react';
import { Post } from '@/lib/types';
import { fetchPresidentialUpdates } from '@/lib/services/presidentialUpdates';
import { useTheme } from '@/lib/contexts/ThemeContext';

export default function PresidentialFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const { posts: newPosts } = await fetchPresidentialUpdates();
      setPosts(newPosts);
    } catch (err) {
      setError('Failed to load updates');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-[980px] mx-auto px-4 pt-24">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-2 text-black dark:text-white transition-colors duration-300">
            Presidential Updates
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 transition-colors duration-300">
            Official updates from The White House
          </p>
        </div>
        <div className="flex justify-center p-8">
          <div className="animate-pulse text-black/60 dark:text-white/60 transition-colors duration-300">
            Loading updates...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[980px] mx-auto px-4 pt-24">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-2 text-black dark:text-white transition-colors duration-300">
            Presidential Updates
          </h2>
          <p className="text-xl text-black/70 dark:text-white/70 transition-colors duration-300">
            Official updates from The White House
          </p>
        </div>
        <div className="mt-8 text-center text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-[980px] mx-auto px-4 pt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-2 text-black dark:text-white transition-colors duration-300">
          Presidential Updates
        </h2>
        <p className="text-xl text-black/70 dark:text-white/70 transition-colors duration-300">
          Official updates from The White House
        </p>
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-8 transition-all duration-300 
              bg-white dark:bg-[#1c1c1e] 
              hover:bg-gray-50 dark:hover:bg-[#2c2c2e]
              shadow-sm hover:shadow-md dark:shadow-none
              border border-gray-100 dark:border-gray-800"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-medium uppercase tracking-wider 
                  text-black/50 dark:text-white/50 transition-colors duration-300">
                  {post.type}
                </span>
                <span className="text-xs text-black/50 dark:text-white/50 transition-colors duration-300">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white 
                group-hover:text-blue-700 dark:group-hover:text-blue-300 
                transition-colors duration-300">
                {post.content.split('\n\n')[0]}
              </h3>
              <p className="leading-relaxed text-black/70 dark:text-white/70 transition-colors duration-300">
                {post.content.split('\n\n')[1]}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center text-blue-700 dark:text-blue-300 
                  group-hover:text-blue-800 dark:group-hover:text-blue-200 
                  transition-colors duration-300">
                  Read more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 