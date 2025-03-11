import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Delete session cookie
    cookies().delete('session_token');
    
    return new NextResponse('Logged out successfully', { status: 200 });
  } catch (error) {
    console.error('Logout error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
} 