import { NextResponse } from 'next/server';

interface Update {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

// In-memory cache for updates and known IDs
let cachedUpdates: Update[] = [];
let lastFetchTime: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const knownIds = new Set<string>();

async function fetchWhiteHouseUpdates(): Promise<Update[]> {
  try {
    const response = await fetch('https://www.whitehouse.gov/wp-json/wp/v2/posts?per_page=10&_embed', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; TrumpTracker/1.0; +http://trumptracker.com)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    console.log(`Found ${posts.length} posts from White House API`);

    const updates = posts.map((post: any) => {
      const id = post.id.toString();
      const description = post.excerpt.rendered
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim()
        .slice(0, 200) + '...'; // Limit to 200 chars

      return {
        id,
        title: post.title.rendered,
        description,
        date: post.date,
        url: post.link
      };
    });

    console.log(`Processed ${updates.length} updates`);
    return updates;
  } catch (error) {
    console.error('Error fetching White House updates:', error);
    return [];
  }
}

export async function GET() {
  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  // Set up SSE headers
  const response = new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });

  // Start background task to fetch and send updates
  (async () => {
    try {
      console.log('New SSE connection established');

      // Fetch initial updates
      console.log('Fetching initial updates...');
      const updates = await fetchWhiteHouseUpdates();
      console.log(`Sending ${updates.length} initial updates`);

      // Send initial updates
      await writer.write(encoder.encode(`data: ${JSON.stringify(updates)}\n\n`));

      // Update cache
      cachedUpdates = updates;
      lastFetchTime = Date.now();
      updates.forEach(update => knownIds.add(update.id));

      // Start update loop
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 15000)); // Check every 15 seconds

        // Only fetch if cache is expired
        if (Date.now() - lastFetchTime > CACHE_TTL) {
          console.log('Cache expired, fetching new updates...');
          const newUpdates = await fetchWhiteHouseUpdates();
          
          // Filter out updates we've already seen
          const uniqueUpdates = newUpdates.filter(update => !knownIds.has(update.id));
          
          if (uniqueUpdates.length > 0) {
            console.log(`Sending ${uniqueUpdates.length} new updates`);
            await writer.write(encoder.encode(`data: ${JSON.stringify(uniqueUpdates)}\n\n`));
            
            // Update cache and known IDs
            cachedUpdates = newUpdates;
            lastFetchTime = Date.now();
            uniqueUpdates.forEach(update => knownIds.add(update.id));
          }
        }
      }
    } catch (error) {
      console.error('Error in SSE connection:', error);
      await writer.close();
    }
  })();

  return response;
} 