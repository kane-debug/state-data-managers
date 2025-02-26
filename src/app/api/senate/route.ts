import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { 
  getLatestVotes, 
  getUpcomingVotes, 
  getCurrentComposition, 
  getCurrentLeadership 
} from '@/lib/db';
import type { SenateVote, ScheduleItem, Leadership } from '@/lib/db/types';

async function validateApiKey(apiKey: string | null) {
  if (!apiKey) return false;
  
  // In production, you would check the API key against the database
  return apiKey === process.env.API_KEY;
}

interface LeadershipPosition {
  id: number;
  position: string;
  name: string;
  party: 'D' | 'R';
  state: string;
  since: string;
  updatedAt: Date;
}

interface LeadershipMap {
  presidentProTempore: LeadershipPosition;
  majorityLeader: LeadershipPosition;
  minorityLeader: LeadershipPosition;
}

// Default data
const defaultData = {
  composition: {
    democrats: 48,
    republicans: 49,
    independents: 3
  },
  leadership: {
    presidentProTempore: {
      id: 1,
      position: 'President Pro Tempore',
      name: 'Patty Murray',
      party: 'D' as const,
      state: 'WA',
      since: '2023',
      updatedAt: new Date()
    },
    majorityLeader: {
      id: 2,
      position: 'Majority Leader',
      name: 'Chuck Schumer',
      party: 'D' as const,
      state: 'NY',
      since: '2021',
      updatedAt: new Date()
    },
    minorityLeader: {
      id: 3,
      position: 'Minority Leader',
      name: 'Mitch McConnell',
      party: 'R' as const,
      state: 'KY',
      since: '2007',
      updatedAt: new Date()
    }
  },
  recentActivity: {
    latestVotes: [],
    upcomingVotes: []
  },
  lastUpdated: new Date().toISOString()
};

export async function GET(request: Request) {
  try {
    // For development, we'll skip API key validation
    // In production, implement proper authentication
    
    // Fetch all data concurrently
    const [
      latestVotes,
      upcomingVotes,
      compositionResult,
      leadership
    ] = await Promise.all([
      getLatestVotes().catch(() => [] as SenateVote[]),
      getUpcomingVotes().catch(() => [] as ScheduleItem[]),
      getCurrentComposition().catch(() => []),
      getCurrentLeadership().catch(() => [] as Leadership[])
    ]);

    // Format the response
    const composition = compositionResult[0] || defaultData.composition;

    // Transform leadership data with type assertion
    const leadershipMap = leadership.reduce<Partial<LeadershipMap>>((acc, leader) => {
      if (leader.position === 'President Pro Tempore') {
        acc.presidentProTempore = leader as LeadershipPosition;
      } else if (leader.position === 'Majority Leader') {
        acc.majorityLeader = leader as LeadershipPosition;
      } else if (leader.position === 'Minority Leader') {
        acc.minorityLeader = leader as LeadershipPosition;
      }
      return acc;
    }, {});

    // Ensure all leadership positions exist
    const finalLeadership = {
      presidentProTempore: leadershipMap.presidentProTempore || defaultData.leadership.presidentProTempore,
      majorityLeader: leadershipMap.majorityLeader || defaultData.leadership.majorityLeader,
      minorityLeader: leadershipMap.minorityLeader || defaultData.leadership.minorityLeader
    };

    return NextResponse.json({
      composition,
      leadership: finalLeadership,
      recentActivity: {
        latestVotes: latestVotes.length > 0 
          ? latestVotes.map(vote => ({
              id: vote.voteId,
              title: vote.title,
              description: vote.description || '',
              result: {
                status: vote.status,
                votes: vote.voteCount || '0-0'
              },
              date: vote.voteDate.toISOString()
            }))
          : defaultData.recentActivity.latestVotes,
        upcomingVotes: upcomingVotes.length > 0
          ? upcomingVotes.map(vote => ({
              id: vote.billId,
              title: vote.title,
              description: vote.description || '',
              expectedDate: vote.expectedDate.toISOString()
            }))
          : defaultData.recentActivity.upcomingVotes
      },
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Senate API Error:', error);
    return NextResponse.json(defaultData);
  }
} 