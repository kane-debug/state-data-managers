import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createClient } from '@vercel/postgres';
import { desc, asc } from 'drizzle-orm';
import * as schema from './schema';
import 'dotenv/config';

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL environment variable is not set');
}

// Initialize the database client
const client = createClient({
  connectionString: process.env.POSTGRES_URL
});

// Initialize drizzle with the client
export const db = drizzle(client, { schema });

// Database functions
export async function insertVote(vote: {
  voteId: string;
  title: string;
  description?: string;
  status: string;
  voteCount?: string;
  voteDate: Date;
}) {
  return db.insert(schema.senateVotes).values(vote);
}

export async function insertScheduleItem(item: {
  billId: string;
  title: string;
  description?: string;
  expectedDate: Date;
}) {
  return db.insert(schema.senateSchedule).values(item);
}

export async function updateComposition(composition: {
  democrats: number;
  republicans: number;
  independents: number;
}) {
  return db.insert(schema.senateComposition).values(composition);
}

export async function updateLeadership(leader: {
  position: string;
  name: string;
  party: string;
  state: string;
  since: string;
}) {
  return db.insert(schema.senateLeadership).values(leader);
}

export async function getLatestVotes(limit = 10) {
  return db.select()
    .from(schema.senateVotes)
    .orderBy(desc(schema.senateVotes.voteDate))
    .limit(limit);
}

export async function getUpcomingVotes(limit = 5) {
  return db.select()
    .from(schema.senateSchedule)
    .orderBy(asc(schema.senateSchedule.expectedDate))
    .limit(limit);
}

export async function getCurrentComposition() {
  return db.select()
    .from(schema.senateComposition)
    .orderBy(desc(schema.senateComposition.updatedAt))
    .limit(1);
}

export async function getCurrentLeadership() {
  return db.select()
    .from(schema.senateLeadership)
    .orderBy(desc(schema.senateLeadership.updatedAt));
} 