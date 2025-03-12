import { NextResponse } from 'next/server';
import { PrismaClient, Senator, Representative } from '@prisma/client';
import { fetchCurrentCongress, transformCongressData } from '@/lib/congress-api';

const prisma = new PrismaClient();

interface UpdateData {
  name: string;
  party: string;
  since: string;
  imageUrl: string | null;
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
      let existingRecord: Senator | Representative | null;
      if (entityType === 'senator') {
        existingRecord = await prisma.senator.findFirst({
          where: { stateId: state },
        });
      } else {
        existingRecord = await prisma.representative.findFirst({
          where: { stateId: state },
        });
      }

      if (!existingRecord) {
        console.log(`No existing ${entityType} found for state ${state}`);
        continue;
      }

      // Compare and create updates for changed fields
      const changes = Object.entries(data).filter(([key, value]) => {
        return existingRecord![key as keyof typeof data] !== value && value !== null;
      }) as [keyof UpdateData, string][];

      for (const [field, newValue] of changes) {
        await prisma.dataUpdate.create({
          data: {
            entityType,
            entityId: existingRecord.id,
            field,
            oldValue: existingRecord[field as keyof typeof data]?.toString() || '',
            newValue: newValue,
            status: 'PENDING',
            source: 'congress_api'
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