import type { State, Governor, Senator, Representative, SocialLink } from '../types/state';

type PartialState = Partial<State>;
type PartialGovernor = Partial<Governor>;
type PartialSenator = Partial<Senator>;
type PartialRepresentative = Partial<Representative>;

// Northeast Region Updates
export const northeastUpdates: Record<string, PartialState> = {
  NY: {
    name: 'New York',
    capital: 'Albany',
    largestCity: 'New York City',
    statehood: 'July 26, 1788',
    nickname: 'The Empire State',
    population: 20201249,
    electoralVotes: 28,
    representativesCount: 26,
    governor: {
      name: 'Kathy Hochul',
      party: 'D',
      since: '2021',
      socialLinks: [
        {
          platform: 'website',
          url: 'https://www.governor.ny.gov'
        }
      ]
    },
    senators: [
      {
        name: 'Chuck Schumer',
        party: 'D',
        since: '1999',
        class: 3,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.schumer.senate.gov'
          }
        ]
      },
      {
        name: 'Kirsten Gillibrand',
        party: 'D',
        since: '2009',
        class: 1,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.gillibrand.senate.gov'
          }
        ]
      }
    ],
    representatives: [
      {
        name: 'Nick LaLota',
        party: 'R',
        district: 1,
        since: '2023',
        socialLinks: [{ platform: 'website', url: 'https://lalota.house.gov' }]
      },
      {
        name: 'Andrew Garbarino',
        party: 'R',
        district: 2,
        since: '2021',
        socialLinks: [{ platform: 'website', url: 'https://garbarino.house.gov' }]
      },
      {
        name: 'George Santos',
        party: 'R',
        district: 3,
        since: '2023',
        socialLinks: [{ platform: 'website', url: 'https://santos.house.gov' }]
      },
      {
        name: 'Anthony D\'Esposito',
        party: 'R',
        district: 4,
        since: '2023',
        socialLinks: [{ platform: 'website', url: 'https://desposito.house.gov' }]
      },
      {
        name: 'Gregory Meeks',
        party: 'D',
        district: 5,
        since: '1998',
        socialLinks: [{ platform: 'website', url: 'https://meeks.house.gov' }]
      },
      {
        name: 'Grace Meng',
        party: 'D',
        district: 6,
        since: '2013',
        socialLinks: [{ platform: 'website', url: 'https://meng.house.gov' }]
      },
      {
        name: 'Nydia Velázquez',
        party: 'D',
        district: 7,
        since: '1993',
        socialLinks: [{ platform: 'website', url: 'https://velazquez.house.gov' }]
      },
      {
        name: 'Hakeem Jeffries',
        party: 'D',
        district: 8,
        since: '2013',
        socialLinks: [{ platform: 'website', url: 'https://jeffries.house.gov' }]
      },
      {
        name: 'Yvette Clarke',
        party: 'D',
        district: 9,
        since: '2007',
        socialLinks: [{ platform: 'website', url: 'https://clarke.house.gov' }]
      },
      {
        name: 'Dan Goldman',
        party: 'D',
        district: 10,
        since: '2023',
        socialLinks: [{ platform: 'website', url: 'https://goldman.house.gov' }]
      }
    ]
  }
};

// Southeast Region Updates
export const southeastUpdates: Record<string, PartialState> = {
  VA: {
    name: 'Virginia',
    capital: 'Richmond',
    largestCity: 'Virginia Beach',
    statehood: 'June 25, 1788',
    nickname: 'Old Dominion',
    population: 8642274,
    electoralVotes: 13,
    representativesCount: 11,
    governor: {
      name: 'Glenn Youngkin',
      party: 'R',
      since: '2022',
      socialLinks: [
        {
          platform: 'website',
          url: 'https://www.governor.virginia.gov'
        }
      ]
    },
    senators: [
      {
        name: 'Mark Warner',
        party: 'D',
        since: '2009',
        class: 2,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.warner.senate.gov'
          }
        ]
      },
      {
        name: 'Tim Kaine',
        party: 'D',
        since: '2013',
        class: 1,
        socialLinks: [
          {
            platform: 'website',
            url: 'https://www.kaine.senate.gov'
          }
        ]
      }
    ],
    representatives: [
      {
        name: 'Rob Wittman',
        party: 'R',
        district: 1,
        since: '2007',
        socialLinks: [{ platform: 'website', url: 'https://wittman.house.gov' }]
      },
      {
        name: 'Jen Kiggans',
        party: 'R',
        district: 2,
        since: '2023',
        socialLinks: [{ platform: 'website', url: 'https://kiggans.house.gov' }]
      },
      {
        name: 'Bobby Scott',
        party: 'D',
        district: 3,
        since: '1993',
        socialLinks: [{ platform: 'website', url: 'https://bobbyscott.house.gov' }]
      },
      {
        name: 'Jennifer McClellan',
        party: 'D',
        district: 4,
        since: '2023',
        socialLinks: [{ platform: 'website', url: 'https://mcclellan.house.gov' }]
      },
      {
        name: 'Bob Good',
        party: 'R',
        district: 5,
        since: '2021',
        socialLinks: [{ platform: 'website', url: 'https://good.house.gov' }]
      },
      {
        name: 'Ben Cline',
        party: 'R',
        district: 6,
        since: '2019',
        socialLinks: [{ platform: 'website', url: 'https://cline.house.gov' }]
      },
      {
        name: 'Abigail Spanberger',
        party: 'D',
        district: 7,
        since: '2019',
        socialLinks: [{ platform: 'website', url: 'https://spanberger.house.gov' }]
      },
      {
        name: 'Don Beyer',
        party: 'D',
        district: 8,
        since: '2015',
        socialLinks: [{ platform: 'website', url: 'https://beyer.house.gov' }]
      },
      {
        name: 'Morgan Griffith',
        party: 'R',
        district: 9,
        since: '2011',
        socialLinks: [{ platform: 'website', url: 'https://griffith.house.gov' }]
      },
      {
        name: 'Jennifer Wexton',
        party: 'D',
        district: 10,
        since: '2019',
        socialLinks: [{ platform: 'website', url: 'https://wexton.house.gov' }]
      },
      {
        name: 'Gerry Connolly',
        party: 'D',
        district: 11,
        since: '2009',
        socialLinks: [{ platform: 'website', url: 'https://connolly.house.gov' }]
      }
    ]
  }
};

// Midwest Region Updates
export const midwestUpdates: Record<string, PartialState> = {
  // Updates will be added here
};

// Southwest Region Updates
export const southwestUpdates: Record<string, PartialState> = {
  // Updates will be added here
};

// West Region Updates
export const westUpdates: Record<string, PartialState> = {
  // Updates will be added here
};

// Helper function to merge updates with existing data
export function mergeStateData(
  existing: Record<string, State>,
  updates: Record<string, PartialState>
): Record<string, State> {
  const result = { ...existing };
  
  Object.entries(updates).forEach(([stateCode, stateUpdates]) => {
    if (result[stateCode] && stateUpdates) {
      result[stateCode] = {
        ...result[stateCode],
        ...stateUpdates,
        representatives: stateUpdates.representatives ?? result[stateCode].representatives,
        senators: stateUpdates.senators ?? result[stateCode].senators,
        governor: stateUpdates.governor ?? result[stateCode].governor
      };
    }
  });
  
  return result;
} 