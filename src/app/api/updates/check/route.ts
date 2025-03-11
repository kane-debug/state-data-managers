import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { CongressApiService } from '@/lib/services/congressApi';
import { sendNotificationEmail } from '@/lib/services/emailService';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    // Verify that this is a scheduled task
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if auto-updates are enabled
    if (process.env.AUTO_UPDATE_ENABLED !== 'true') {
      return NextResponse.json({ status: 'Auto-updates disabled' });
    }

    // Initialize services
    const congressApi = new CongressApiService();

    // Check for updates
    await congressApi.checkForUpdates();

    // Send notification if there are pending updates
    const pendingUpdates = await prisma.dataUpdate.count({
      where: { status: 'pending' }
    });

    if (pendingUpdates > 0) {
      await sendNotificationEmail({
        to: process.env.NOTIFICATION_EMAIL || '',
        subject: 'Pending Updates Available',
        text: `There are ${pendingUpdates} pending updates that require review.`
      });
    }

    return NextResponse.json({ 
      status: 'success',
      pendingUpdates
    });
  } catch (error) {
    console.error('Error checking for updates:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 