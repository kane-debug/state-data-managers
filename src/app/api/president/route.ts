import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const apiKey = process.env.CONGRESS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Congress API key not configured' },
        { status: 503 }
      );
    }

    // Fetch president's data from Congress API
    const response = await axios.get('https://api.congress.gov/v3/member?chamber=Executive&congress=118', {
      headers: {
        'X-API-Key': apiKey
      }
    });

    const president = response.data.members?.[0];
    if (!president) {
      return NextResponse.json(
        { error: 'President data not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      name: president.name,
      party: president.partyName,
      imageUrl: president.depiction?.imageUrl,
      url: president.url,
      term: {
        start: president.terms?.item?.[0]?.startYear,
        end: president.terms?.item?.[0]?.endYear
      }
    });
  } catch (error) {
    console.error('Error fetching president data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch president data' },
      { status: 500 }
    );
  }
} 