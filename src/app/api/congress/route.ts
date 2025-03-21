import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { CongressApiService } from '@/lib/services/congressApi';

// Rate limiting configuration
const RATE_LIMIT = 100; // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

// In-memory rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - userLimit.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return true;
  }

  userLimit.count++;
  return false;
}

// Helper function to create a response with security headers
function createResponse(data: any, status: number = 200) {
  const response = NextResponse.json(data, { status });
  
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return response;
}

export async function GET(request: Request) {
  try {
    // Validate API key is set
    if (!process.env.CONGRESS_API_KEY) {
      console.error('CONGRESS_API_KEY environment variable is not set');
      return createResponse(
        { error: 'Congress API is not properly configured' },
        503
      );
    }

    // Get client IP for rate limiting
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return createResponse(
        { error: 'Too many requests. Please try again later.' },
        429
      );
    }

    // Initialize Congress API service
    const congressApi = new CongressApiService();

    // Get the requested data type from the URL
    const url = new URL(request.url);
    const type = url.searchParams.get('type');

    if (!type) {
      return createResponse(
        { error: 'Type parameter is required' },
        400
      );
    }

    // Handle different types of requests
    switch (type) {
      case 'senators':
        await congressApi.updateSenators();
        return createResponse({ status: 'success', message: 'Senators updated' });

      case 'representatives':
        await congressApi.updateRepresentatives();
        return createResponse({ status: 'success', message: 'Representatives updated' });

      case 'all':
        await congressApi.checkForUpdates();
        return createResponse({ status: 'success', message: 'All updates completed' });

      default:
        return createResponse(
          { error: 'Invalid type parameter' },
          400
        );
    }
  } catch (error) {
    console.error('Congress API error:', error);
    
    // Handle specific API key errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return createResponse(
          { error: 'Congress API authentication failed' },
          503
        );
      }
    }

    return createResponse(
      { error: 'Internal server error' },
      500
    );
  }
} 