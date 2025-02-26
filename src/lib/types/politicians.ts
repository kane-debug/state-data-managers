export interface SocialLinks {
  website?: string;
  twitter?: string;
  facebook?: string;
}

export interface StateInfo {
  capital: string;
  population: number;
  largestCity: string;
  statehood: string;
  nickname: string;
  governmentWebsite?: string;
}

export interface Governor {
  name: string;
  party: string;
  since: string;
  initiatives: string[];
  socialLinks: SocialLinks;
  imageUrl?: string;
}

export interface Senator {
  name: string;
  party: string;
  since: string;
  socialLinks: SocialLinks;
  imageUrl?: string;
}

export interface Representative {
  name: string;
  party: string;
  district: string;
  imageUrl?: string;
}

export interface StateData {
  info: StateInfo;
  governor: Governor;
  senators: Senator[];
  representatives: Representative[];
  lastUpdated?: string;
} 