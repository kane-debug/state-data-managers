import { NextResponse } from 'next/server';
import { getCurrentSenateData } from '@/lib/data/senateData';

export async function GET() {
  try {
    const data = await getCurrentSenateData();
    return NextResponse.json({
      success: true,
      data,
      message: 'Senate data fetched successfully'
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      message: 'Failed to fetch Senate data'
    }, { status: 500 });
  }
} 