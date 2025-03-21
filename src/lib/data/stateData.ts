import type { StateData } from '../types/state';

interface State {
  name: string;
  capital: string;
  largestCity: string;
  statehood: string;
  nickname: string;
  population: number;
  electoralVotes: number;
  representativesCount: number;
  governor: {
    name: string;
    party: 'D' | 'R' | 'I';
    since: string;
    imageUrl?: string;
    socialLinks?: Array<{
      platform: 'website' | 'twitter' | 'facebook';
      url: string;
    }>;
  };
  senators: Array<{
    name: string;
    party: 'D' | 'R' | 'I';
    since: string;
    class?: number;
    imageUrl?: string;
    socialLinks?: Array<{
      platform: 'website' | 'twitter' | 'facebook';
      url: string;
    }>;
  }>;
  representatives: Array<{
    name: string;
    party: 'D' | 'R' | 'I';
    district: number;
    since: string;
    imageUrl?: string;
    socialLinks?: Array<{
      platform: 'website' | 'twitter' | 'facebook';
      url: string;
    }>;
  }>;
}

export const stateData: Record<string, State> = {
  AL: {
    name: 'Alabama',
    capital: 'Montgomery',
    largestCity: 'Birmingham',
    statehood: 'December 14, 1819',
    nickname: 'The Yellowhammer State',
    population: 5024279,
    electoralVotes: 9,
    representativesCount: 7,
    governor: {
      name: 'Kay Ivey',
      party: 'R',
      since: '2017',
      socialLinks: [
        {
          platform: 'website',
          url: 'https://governor.alabama.gov'
        }
      ]
    },
    senators: [
      {
        name: 'Tommy Tuberville',
        party: 'R',
        since: '2021',
        class: 2,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.tuberville.senate.gov'
          }
        ]
      },
      {
        name: 'Katie Britt',
        party: 'R',
        since: '2023',
        class: 3,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.britt.senate.gov'
          }
        ]
      }
    ],
    representatives: [
      {
        name: 'Jerry Carl',
        party: 'R',
        district: 1,
        since: '2021',
        socialLinks: [
          {
            platform: 'website',
            url: 'https://carl.house.gov'
          }
        ]
      },
      {
        name: 'Barry Moore',
        party: 'R',
        district: 2,
        since: '2021',
        socialLinks: [
          {
            platform: 'website',
            url: 'https://barrymoore.house.gov'
          }
        ]
      }
    ]
  },
  AK: {
    name: 'Alaska',
    capital: 'Juneau',
    largestCity: 'Anchorage',
    statehood: 'January 3, 1959',
    nickname: 'The Last Frontier',
    population: 733391,
    electoralVotes: 3,
    representativesCount: 1,
    governor: {
      name: 'Mike Dunleavy',
      party: 'R',
      since: '2018',
      socialLinks: [
        {
          platform: 'website',
          url: 'https://gov.alaska.gov'
        }
      ]
    },
    senators: [
      {
        name: 'Lisa Murkowski',
        party: 'R',
        since: '2002',
        class: 2,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.murkowski.senate.gov'
          }
        ]
      },
      {
        name: 'Dan Sullivan',
        party: 'R',
        since: '2015',
        class: 3,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.sullivan.senate.gov'
          }
        ]
      }
    ],
    representatives: [
      {
        name: 'Mary Peltola',
        party: 'D',
        district: 1,
        since: '2022',
        socialLinks: [
          {
            platform: 'website',
            url: 'https://peltola.house.gov'
          }
        ]
      }
    ]
  }
};
