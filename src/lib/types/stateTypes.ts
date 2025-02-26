export interface StateInfo {
  capital: string;
  population: number;
  largestCity: string;
  statehood: string;
  nickname: string;
  governmentWebsite: string;
}

export interface SocialLinks {
  website: string;
  twitter: string;
  facebook?: string;
}

export interface Governor {
  name: string;
  party: string;
  since: string;
  initiatives: string[];
  socialLinks: SocialLinks;
}

export interface Senator {
  name: string;
  party: string;
  since: string;
  socialLinks: SocialLinks;
}

export interface Representative {
  name: string;
  party: string;
  district: string;
}

export interface Legislature {
  houseMajority: string;
  senateMajority: string;
  houseSeats: number;
  senateSeats: number;
  nextElection: string;
  sessionDates: string;
}

export interface Bill {
  title: string;
  description: string;
  status: string;
  category: string;
  lastAction: string;
  lastUpdated: string;
  source: string;
}

export interface ExtendedStateData {
  info: StateInfo;
  governor: Governor;
  senators: Senator[];
  representatives: Representative[];
  legislature: Legislature;
  bills: Bill[];
  lastUpdated: string;
} 