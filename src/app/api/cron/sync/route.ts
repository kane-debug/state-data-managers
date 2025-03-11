import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(request: Request) {
  try {
    const headersList = headers();
    const authorization = headersList.get('authorization');

    if (!CRON_SECRET || authorization !== `Bearer ${CRON_SECRET}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Call the sync API
    const response = await fetch(new URL('/api/updates/sync', request.url), {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`Sync failed: ${response.statusText}`);
    }

    return new NextResponse('Cron job completed successfully', { status: 200 });
  } catch (error) {
    console.error('Cron job error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
} 