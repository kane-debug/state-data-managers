import { NextResponse } from 'next/server';
import { updateStateRepresentatives } from '@/lib/services/stateDataUpdater';
import { updateGovernors } from '@/lib/services/governorUpdater';
import { stateData } from '@/lib/data/stateData';

export async function POST(request: Request) {
  try {
    // Verify API key
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.UPDATE_API_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Update representatives and senators
    const congressSuccess = await updateStateRepresentatives();
    
    // Update governors
    const governorSuccess = await updateGovernors(stateData);
    
    if (congressSuccess && governorSuccess) {
      return NextResponse.json({ 
        message: 'State data updated successfully',
        updates: {
          congress: 'success',
          governors: 'success'
        }
      });
    } else {
      return NextResponse.json({ 
        error: 'Partial update failure',
        updates: {
          congress: congressSuccess ? 'success' : 'failed',
          governors: governorSuccess ? 'success' : 'failed'
        }
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in update endpoint:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 