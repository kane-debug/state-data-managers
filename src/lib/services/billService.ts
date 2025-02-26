import { db } from '@/lib/firebase/firebase';
import { collection, getDocs, query, where, orderBy, addDoc, updateDoc, doc, Firestore } from 'firebase/firestore';

export interface Bill {
  id?: string;
  state: string;
  title: string;
  description: string;
  status: string;
  category: string;
  lastAction: string;
  lastUpdated: string;
  source: string;
}

class BillService {
  private db: Firestore;

  constructor(db: Firestore) {
    this.db = db;
  }

  async getBills(state?: string): Promise<Bill[]> {
    try {
      const billsRef = collection(this.db, 'bills');
      let q = query(billsRef, orderBy('lastUpdated', 'desc'));
      
      if (state) {
        q = query(billsRef, where('state', '==', state), orderBy('lastUpdated', 'desc'));
      }
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Bill[];
    } catch (error) {
      console.error('Error fetching bills:', error);
      throw error;
    }
  }

  async createBill(bill: Omit<Bill, 'id'>): Promise<Bill> {
    try {
      const billsRef = collection(this.db, 'bills');
      const docRef = await addDoc(billsRef, {
        ...bill,
        lastUpdated: new Date().toISOString()
      });
      
      return {
        id: docRef.id,
        ...bill
      };
    } catch (error) {
      console.error('Error creating bill:', error);
      throw error;
    }
  }

  async updateBill(id: string, updates: Partial<Bill>): Promise<Bill> {
    try {
      const billRef = doc(this.db, 'bills', id);
      const updatedData = {
        ...updates,
        lastUpdated: new Date().toISOString()
      };
      
      await updateDoc(billRef, updatedData);
      
      return {
        id,
        ...updatedData
      } as Bill;
    } catch (error) {
      console.error('Error updating bill:', error);
      throw error;
    }
  }
}

export const billService = new BillService(db); 