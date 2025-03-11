import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { fetchCurrentCongress, transformCongressData } from '@/lib/congress-api';

const prisma = new PrismaClient();

interface UpdateData {
  firstName: string;
  lastName: string;
  party: string;
  twitter: string | null;
  facebook: string | null;
  youtube: string | null;
  website: string | null;
}

interface Update {
  entityType: 'senator' | 'representative';
  state: string;
  data: UpdateData;
}

export async function POST() {
  try {
    // Fetch current congress data
    const members = await fetchCurrentCongress();
    const updates = transformCongressData(members) as Update[];

    // Create pending updates in the database
    for (const update of updates) {
      const { entityType, state, data } = update;

      // Find existing record
      let existingRecord;
      if (entityType === 'senator') {
        existingRecord = await prisma.senator.findFirst({
          where: { state },
        });
      } else {
        existingRecord = await prisma.representative.findFirst({
          where: { state },
        });
      }

      if (!existingRecord) {
        console.log(`No existing ${entityType} found for state ${state}`);
        continue;
      }

      // Compare and create updates for changed fields
      const changes = Object.entries(data).filter(([key, value]) => {
        return existingRecord[key] !== value && value !== null;
      }) as [keyof UpdateData, string][];

      for (const [field, newValue] of changes) {
        await prisma.update.create({
          data: {
            entityType,
            entityId: existingRecord.id,
            field,
            oldValue: existingRecord[field]?.toString() || '',
            newValue: newValue,
            status: 'PENDING',
          },
        });
      }
    }

    return new NextResponse('Updates synced successfully', { status: 200 });
  } catch (error) {
    console.error('Sync error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
} 