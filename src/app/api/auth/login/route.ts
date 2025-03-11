import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';

// In a real app, you would use a secure session management system
const generateSessionToken = () => {
  return Math.random().toString(36).substring(2);
};

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return new NextResponse('Invalid credentials', { status: 401 });
    }

    const sessionToken = generateSessionToken();
    
    // Set session cookie
    cookies().set('session_token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      // Expire in 24 hours
      maxAge: 60 * 60 * 24,
    });

    return new NextResponse('Logged in successfully', { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
} 