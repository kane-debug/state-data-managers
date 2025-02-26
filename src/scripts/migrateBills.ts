import { db } from '@/lib/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { stateData } from '@/lib/data/stateData';

async function migrateBills() {
  const billsRef = collection(db, 'bills');
  let migratedCount = 0;
  let errorCount = 0;

  console.log('Starting bills migration...');

  for (const [state, data] of Object.entries(stateData)) {
    for (const bill of data.bills) {
      try {
        await addDoc(billsRef, {
          state,
          ...bill,
          lastUpdated: new Date().toISOString()
        });
        migratedCount++;
        console.log(`Migrated bill: ${bill.title} (${state})`);
      } catch (error) {
        errorCount++;
        console.error(`Error migrating bill: ${bill.title} (${state})`, error);
      }
    }
  }

  console.log(`
Migration completed:
- Successfully migrated: ${migratedCount} bills
- Errors: ${errorCount} bills
  `);
}

// Run migration
migrateBills().catch(console.error); 