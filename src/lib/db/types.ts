export interface SenateVote {
  id: number;
  voteId: string;
  title: string;
  description?: string;
  status: string;
  voteCount: string;
  voteDate: Date;
  createdAt: Date;
}

export interface ScheduleItem {
  id: number;
  billId: string;
  title: string;
  description?: string;
  expectedDate: Date;
  createdAt: Date;
}

export interface Composition {
  id: number;
  democrats: number;
  republicans: number;
  independents: number;
  updatedAt: Date;
}

export interface Leadership {
  id: number;
  position: string;
  name: string;
  party: string;
  state: string;
  since: string;
  updatedAt: Date;
}

export interface ApiKey {
  id: number;
  key: string;
  description?: string;
  createdAt: Date;
  expiresAt?: Date;
} 