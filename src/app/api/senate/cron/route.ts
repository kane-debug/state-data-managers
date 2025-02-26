import { NextResponse } from 'next/server';
import { getCurrentSenateData } from '@/lib/data/senateData';
import { 
  insertVote, 
  insertScheduleItem, 
  updateComposition, 
  updateLeadership 
} from '@/lib/db';

// Vercel Cron Job: runs every 5 minutes
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

async function isValidCronRequest(request: Request) {
  // Verify the request is coming from Vercel's cron job
  const authHeader = request.headers.get('authorization');
  if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET_KEY}`) {
    return false;
  }
  return true;
}

export async function GET(request: Request) {
  try {
    // Verify this is a valid cron request
    if (!await isValidCronRequest(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch latest Senate data
    const senateData = await getCurrentSenateData();

    // Update composition
    await updateComposition(senateData.composition);

    // Update leadership
    await Promise.all([
      updateLeadership({
        position: 'President Pro Tempore',
        ...senateData.leadership.presidentProTempore
      }),
      updateLeadership({
        position: 'Majority Leader',
        ...senateData.leadership.majorityLeader
      }),
      updateLeadership({
        position: 'Minority Leader',
        ...senateData.leadership.minorityLeader
      })
    ]);

    // Update votes
    await Promise.all(
      senateData.recentActivity.latestVotes.map(vote => 
        insertVote({
          voteId: vote.id,
          title: vote.title,
          description: vote.description,
          status: vote.result.status,
          voteCount: vote.result.votes,
          voteDate: new Date(vote.date)
        })
      )
    );

    // Update schedule
    await Promise.all(
      senateData.recentActivity.upcomingVotes.map(vote =>
        insertScheduleItem({
          billId: vote.id,
          title: vote.title,
          description: vote.description,
          expectedDate: new Date(vote.expectedDate)
        })
      )
    );

    return NextResponse.json({
      success: true,
      lastUpdated: senateData.lastUpdated
    });
  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { error: 'Failed to update Senate data' },
      { status: 500 }
    );
  }
} 