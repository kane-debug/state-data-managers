import { sql } from '@vercel/postgres';
import { 
  integer, 
  pgTable, 
  serial, 
  text, 
  timestamp, 
  varchar 
} from 'drizzle-orm/pg-core';

// Senate Votes Table
export const senateVotes = pgTable('senate_votes', {
  id: serial('id').primaryKey(),
  voteId: varchar('vote_id', { length: 50 }).notNull(),
  title: text('title').notNull(),
  description: text('description'),
  status: varchar('status', { length: 20 }).notNull(),
  voteCount: varchar('vote_count', { length: 20 }),
  voteDate: timestamp('vote_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Senate Schedule Table
export const senateSchedule = pgTable('senate_schedule', {
  id: serial('id').primaryKey(),
  billId: varchar('bill_id', { length: 50 }).notNull(),
  title: text('title').notNull(),
  description: text('description'),
  expectedDate: timestamp('expected_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Senate Composition Table
export const senateComposition = pgTable('senate_composition', {
  id: serial('id').primaryKey(),
  democrats: integer('democrats').notNull(),
  republicans: integer('republicans').notNull(),
  independents: integer('independents').notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Senate Leadership Table
export const senateLeadership = pgTable('senate_leadership', {
  id: serial('id').primaryKey(),
  position: varchar('position', { length: 50 }).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  party: varchar('party', { length: 1 }).notNull(),
  state: varchar('state', { length: 2 }).notNull(),
  since: varchar('since', { length: 4 }).notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// API Keys Table for Authentication
export const apiKeys = pgTable('api_keys', {
  id: serial('id').primaryKey(),
  key: varchar('key', { length: 64 }).notNull().unique(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
  expiresAt: timestamp('expires_at'),
}); 