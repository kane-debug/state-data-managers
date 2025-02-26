import { NextResponse } from 'next/server';
import { insertVote, insertScheduleItem, updateComposition, updateLeadership } from '@/lib/db';
import { headers } from 'next/headers';
import { createHmac } from 'crypto';

// Verify webhook signature
async function verifyWebhookSignature(request: Request) {
  const signature = headers().get('x-senate-signature');
  if (!signature || !process.env.WEBHOOK_SECRET) return false;

  const body = await request.text();
  const hmac = createHmac('sha256', process.env.WEBHOOK_SECRET);
  const digest = hmac.update(body).digest('hex');
  
  return signature === `sha256=${digest}`;
}

export async function POST(request: Request) {
  try {
    // Verify webhook signature
    if (!await verifyWebhookSignature(request)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { type, data } = body;

    switch (type) {
      case 'vote.recorded':
        await insertVote({
          voteId: data.id,
          title: data.title,
          description: data.description,
          status: data.result.status,
          voteCount: data.result.votes,
          voteDate: new Date(data.date)
        });
        break;

      case 'schedule.updated':
        await insertScheduleItem({
          billId: data.id,
          title: data.title,
          description: data.description,
          expectedDate: new Date(data.expectedDate)
        });
        break;

      case 'composition.changed':
        await updateComposition({
          democrats: data.democrats,
          republicans: data.republicans,
          independents: data.independents
        });
        break;

      case 'leadership.changed':
        await updateLeadership({
          position: data.position,
          name: data.name,
          party: data.party,
          state: data.state,
          since: data.since
        });
        break;

      default:
        return NextResponse.json(
          { error: 'Unknown event type' },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
} 