import { useState, useEffect } from 'react';
import { Post } from '@/lib/types';

type FeedType = 'all' | 'official' | 'social' | 'press';

// Mock data for initial state
const mockPosts: Post[] = [
  {
    id: '1',
    authorId: 'president',
    content: 'Addressing the nation tonight at 9 PM EST on the new infrastructure bill.',
    images: [],
    likes: [],
    reposts: [],
    comments: [],
    createdAt: new Date('2025-03-20T14:00:00'),
    updatedAt: new Date('2025-03-20T14:00:00'),
    topics: ['Infrastructure', 'Economy'],
    isOfficial: true,
    type: 'official'
  },
  {
    id: '2',
    authorId: 'president',
    content: 'Just finished a productive meeting with congressional leaders on bipartisan cooperation.',
    images: [],
    likes: ['user1', 'user2'],
    reposts: [],
    comments: [],
    createdAt: new Date('2025-03-19T18:30:00'),
    updatedAt: new Date('2025-03-19T18:30:00'),
    topics: ['Congress', 'Bipartisanship'],
    isOfficial: true,
    type: 'press'
  },
  {
    id: '3',
    authorId: 'president',
    content: 'Great to meet with our allies today. America\'s partnerships are stronger than ever. 🌎',
    images: [],
    likes: [],
    reposts: [],
    comments: [],
    createdAt: new Date('2025-03-18T20:15:00'),
    updatedAt: new Date('2025-03-18T20:15:00'),
    topics: ['ForeignPolicy'],
    isOfficial: false,
    type: 'social'
  }
];

export function usePresidentialFeed(feedType: FeedType = 'all') {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create SSE connection
    const eventSource = new EventSource('/api/presidential-feed');
    
    // Connection opened
    eventSource.onopen = () => {
      setLoading(false);
      console.log('Connected to presidential feed');
    };

    // Listen for messages
    eventSource.onmessage = (event) => {
      try {
        const newPost = JSON.parse(event.data);
        if (newPost.type === 'connected') return;
        
        setPosts(prev => [newPost, ...prev]);
      } catch (err) {
        console.error('Error parsing message:', err);
      }
    };

    // Handle errors
    eventSource.onerror = () => {
      setError('Connection error. Please try again later.');
      setLoading(false);
      eventSource.close();
    };

    // Clean up on unmount
    return () => {
      eventSource.close();
    };
  }, []);

  // Filter posts based on feedType
  const filteredPosts = posts.filter(post => {
    if (feedType === 'all') return true;
    if (feedType === 'official') return post.isOfficial;
    if (feedType === 'social') return post.type === 'social';
    if (feedType === 'press') return post.type === 'press';
    return true;
  });

  const addPost = async (content: string, postType: 'official' | 'social' | 'press' = 'official') => {
    const newPost: Post = {
      id: String(Date.now()),
      authorId: 'president',
      content,
      images: [],
      likes: [],
      reposts: [],
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      topics: [],
      isOfficial: postType === 'official',
      type: postType
    };

    try {
      const response = await fetch('/api/presidential-feed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add post');
      // Still update local state even if the API call fails
      setPosts(prev => [newPost, ...prev]);
    }
  };

  return { posts: filteredPosts, loading, error, addPost };
} 