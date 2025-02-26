import { NextResponse } from 'next/server';
import { fetchPresidentialUpdates } from '@/lib/services/presidentialUpdates';

// Store active SSE clients
const clients = new Set<ReadableStreamDefaultController>();

// Keep track of the last update time
let lastUpdateTime = Date.now();
const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes

// SSE endpoint
export async function GET() {
  const stream = new ReadableStream({
    async start(controller) {
      clients.add(controller);

      // Send initial data
      try {
        const initialPosts = await fetchPresidentialUpdates();
        controller.enqueue(`data: ${JSON.stringify(initialPosts)}\n\n`);
      } catch (error) {
        console.error('Error fetching initial posts:', error);
      }

      // Set up periodic updates
      const interval = setInterval(async () => {
        try {
          if (Date.now() - lastUpdateTime >= UPDATE_INTERVAL) {
            const updates = await fetchPresidentialUpdates();
            const message = `data: ${JSON.stringify(updates)}\n\n`;
            
            clients.forEach(client => {
              try {
                client.enqueue(message);
              } catch (error) {
                console.error('Error sending update to client:', error);
                clients.delete(client);
              }
            });

            lastUpdateTime = Date.now();
          }
        } catch (error) {
          console.error('Error fetching updates:', error);
        }
      }, UPDATE_INTERVAL);

      // Clean up interval when the client disconnects
      return () => {
        clearInterval(interval);
        clients.delete(controller);
      };
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

// API endpoint to manually trigger an update
export async function POST(request: Request) {
  try {
    const updates = await fetchPresidentialUpdates();
    const message = `data: ${JSON.stringify(updates)}\n\n`;
    
    clients.forEach(client => {
      try {
        client.enqueue(message);
      } catch (error) {
        console.error('Error sending update to client:', error);
        clients.delete(client);
      }
    });

    lastUpdateTime = Date.now();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch updates' }, { status: 500 });
  }
} 