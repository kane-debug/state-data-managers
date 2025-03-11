export interface State {
  name: string;
  capital: string;
  largestCity: string;
  statehood: string;
  nickname: string;
  population: number;
  electoralVotes: number;
  representativesCount: number;
  governor: Governor;
  senators: Senator[];
  representatives: Representative[];
}

export interface Governor {
  name: string;
  party: 'D' | 'R' | 'I';
  since: string;
  imageUrl?: string;
  socialLinks?: SocialLink[];
}

export interface Senator {
  name: string;
  party: 'D' | 'R' | 'I';
  since: string;
  class?: 1 | 2 | 3;
  imageUrl?: string;
  socialLinks?: SocialLink[];
}

export interface Representative {
  name: string;
  party: 'D' | 'R' | 'I';
  district: number;
  since: string;
  imageUrl?: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export type StateData = Record<string, State>;