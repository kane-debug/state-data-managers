'use client';

import { useEffect, useState, useRef } from 'react';

interface Update {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

export default function PresidentUpdates() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    console.log('Initializing EventSource connection...');
    // Create EventSource connection
    const eventSource = new EventSource('/api/president/updates');
    eventSourceRef.current = eventSource;

    // Handle incoming messages
    eventSource.onmessage = (event) => {
      try {
        console.log('Received message:', event.data);
        const data = JSON.parse(event.data);
        if (Array.isArray(data)) {
          console.log('Received initial updates:', data.length);
          // Initial data load
          setUpdates(data);
          setLastUpdated(new Date());
          setLoading(false);
        } else if (data.error) {
          console.error('Received error:', data.error);
          // Error message
          setError(data.error);
          setLoading(false);
        } else {
          console.log('Received single update:', data);
          // Single update
          setUpdates(prev => {
            // Check if update already exists
            if (prev.some(u => u.id === data.id)) {
              console.log('Update already exists:', data.id);
              return prev;
            }
            console.log('Adding new update:', data.id);
            // Add new update to the beginning
            return [data, ...prev];
          });
          setLastUpdated(new Date());
        }
      } catch (err) {
        console.error('Error parsing update:', err);
        setError('Failed to process update');
      }
    };

    // Handle connection errors
    eventSource.onerror = (err) => {
      console.error('EventSource error:', err);
      setError('Connection lost. Reconnecting...');
      eventSource.close();
      // Attempt to reconnect after 5 seconds
      setTimeout(() => {
        console.log('Attempting to reconnect...');
        if (eventSourceRef.current) {
          eventSourceRef.current = new EventSource('/api/president/updates');
        }
      }, 5000);
    };

    // Cleanup on unmount
    return () => {
      console.log('Cleaning up EventSource connection...');
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  // Loading state
  if (loading && !lastUpdated) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-4 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg">
        {error}
        <button 
          onClick={() => {
            console.log('Manual reconnection attempt...');
            if (eventSourceRef.current) {
              eventSourceRef.current.close();
              eventSourceRef.current = new EventSource('/api/president/updates');
            }
          }}
          className="mt-2 text-sm underline hover:text-red-700 dark:hover:text-red-300"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Latest Updates</h2>
        {lastUpdated && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        )}
      </div>
      
      {updates.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No updates available at this time.
        </div>
      ) : (
        updates.map((update) => (
          <a
            key={update.id}
            href={update.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                {update.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {update.description}
              </p>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(update.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </a>
        ))
      )}
    </div>
  );
} 