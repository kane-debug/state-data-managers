export interface StateInfo {
  capital: string;
  largestCity: string;
  statehood: string;
  nickname: string;
  population: number;
}

export interface SocialLink {
  platform: 'twitter' | 'facebook' | 'instagram' | 'website';
  url: string;
}

export interface Governor {
  name: string;
  party: 'Democrat' | 'Republican' | 'Independent';
  since: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

export interface Senator {
  name: string;
  party: 'Democrat' | 'Republican' | 'Independent';
  since: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

export interface Representative {
  name: string;
  party: 'Democrat' | 'Republican' | 'Independent';
  district: string;
  since: string;
  socialLinks: SocialLink[];
}

export interface State {
  info: StateInfo;
  governor: Governor;
  senators: Senator[];
  representatives: Representative[];
}

export type StateData = Record<string, State>; 