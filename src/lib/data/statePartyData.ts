export type PartyAffiliation = 'D' | 'R' | 'I';

interface SocialLinks {
  website?: string;
  twitter?: string;
  facebook?: string;
}

interface Governor {
  name: string;
  party: PartyAffiliation;
  since: string;
  imageUrl?: string;
  socialLinks?: SocialLinks;
  initiatives?: string[];
}

export interface StateGovernor {
  state: string;
  party: PartyAffiliation;
  governor: Governor;
}

// Current governors as of 2025
export const stateGovernors: Record<string, StateGovernor> = {
  'al': {
    state: 'Alabama',
    party: 'R',
    governor: {
      name: 'Kay Ivey',
      party: 'R',
      since: '2017'
    }
  },
  'ak': { 
    state: 'Alaska', 
    party: 'R',
    governor: { 
      name: 'Mike Dunleavy', 
      party: 'R', 
      since: '2019' 
    }
  },
  'az': { 
    state: 'Arizona', 
    party: 'D',
    governor: { 
      name: 'Katie Hobbs', 
      party: 'D', 
      since: '2023' 
    }
  },
  'ar': { 
    state: 'Arkansas', 
    party: 'R',
    governor: { 
      name: 'Sarah Huckabee Sanders', 
      party: 'R', 
      since: '2023' 
    }
  },
  'ca': {
    state: 'California',
    party: 'D',
    governor: {
      name: 'Gavin Newsom',
      party: 'D',
      since: '2019',
      imageUrl: '/governors/gavin-newsom.jpg'
    }
  },
  'co': { 
    state: 'Colorado', 
    party: 'D',
    governor: { 
      name: 'Jared Polis', 
      party: 'D', 
      since: '2019' 
    }
  },
  'ct': { 
    state: 'Connecticut', 
    party: 'D',
    governor: { 
      name: 'Ned Lamont', 
      party: 'D', 
      since: '2019' 
    }
  },
  'de': { 
    state: 'Delaware', 
    party: 'D',
    governor: { 
      name: 'John Carney', 
      party: 'D', 
      since: '2017' 
    }
  },
  'fl': { 
    state: 'Florida', 
    party: 'R',
    governor: { 
      name: 'Ron DeSantis', 
      party: 'R', 
      since: '2019' 
    }
  },
  'ga': { 
    state: 'Georgia', 
    party: 'R',
    governor: { 
      name: 'Brian Kemp', 
      party: 'R', 
      since: '2019' 
    }
  },
  'hi': { 
    state: 'Hawaii', 
    party: 'D',
    governor: { 
      name: 'Josh Green', 
      party: 'D', 
      since: '2023' 
    }
  },
  'id': { 
    state: 'Idaho', 
    party: 'R',
    governor: { 
      name: 'Brad Little', 
      party: 'R', 
      since: '2019' 
    }
  },
  'il': { 
    state: 'Illinois', 
    party: 'D',
    governor: { 
      name: 'JB Pritzker', 
      party: 'D', 
      since: '2019' 
    }
  },
  'in': { 
    state: 'Indiana', 
    party: 'R',
    governor: { 
      name: 'Eric Holcomb', 
      party: 'R', 
      since: '2017' 
    }
  },
  'ia': { 
    state: 'Iowa', 
    party: 'R',
    governor: { 
      name: 'Kim Reynolds', 
      party: 'R', 
      since: '2017' 
    }
  },
  'ks': { 
    state: 'Kansas', 
    party: 'D',
    governor: { 
      name: 'Laura Kelly', 
      party: 'D', 
      since: '2019' 
    }
  },
  'ky': { 
    state: 'Kentucky', 
    party: 'D',
    governor: { 
      name: 'Andy Beshear', 
      party: 'D', 
      since: '2019' 
    }
  },
  'la': { 
    state: 'Louisiana', 
    party: 'R',
    governor: { 
      name: 'Jeff Landry', 
      party: 'R', 
      since: '2024' 
    }
  },
  'me': { 
    state: 'Maine', 
    party: 'D',
    governor: { 
      name: 'Janet Mills', 
      party: 'D', 
      since: '2019' 
    }
  },
  'md': { 
    state: 'Maryland', 
    party: 'D',
    governor: { 
      name: 'Wes Moore', 
      party: 'D', 
      since: '2023' 
    }
  },
  'ma': { 
    state: 'Massachusetts', 
    party: 'D',
    governor: { 
      name: 'Maura Healey', 
      party: 'D', 
      since: '2023' 
    }
  },
  'mi': { 
    state: 'Michigan', 
    party: 'D',
    governor: { 
      name: 'Gretchen Whitmer', 
      party: 'D', 
      since: '2019' 
    }
  },
  'mn': { 
    state: 'Minnesota', 
    party: 'D',
    governor: { 
      name: 'Tim Walz', 
      party: 'D', 
      since: '2019' 
    }
  },
  'ms': { 
    state: 'Mississippi', 
    party: 'R',
    governor: { 
      name: 'Tate Reeves', 
      party: 'R', 
      since: '2020' 
    }
  },
  'mo': { 
    state: 'Missouri', 
    party: 'R',
    governor: { 
      name: 'Mike Parson', 
      party: 'R', 
      since: '2019' 
    }
  },
  'mt': { 
    state: 'Montana', 
    party: 'R',
    governor: { 
      name: 'Greg Gianforte', 
      party: 'R', 
      since: '2019' 
    }
  },
  'ne': { 
    state: 'Nebraska', 
    party: 'R',
    governor: { 
      name: 'Jim Pillen', 
      party: 'R', 
      since: '2023' 
    }
  },
  'nv': { 
    state: 'Nevada', 
    party: 'R',
    governor: { 
      name: 'Joe Lombardo', 
      party: 'R', 
      since: '2023' 
    }
  },
  'nh': { 
    state: 'New Hampshire', 
    party: 'R',
    governor: { 
      name: 'Chris Sununu', 
      party: 'R', 
      since: '2017' 
    }
  },
  'nj': { 
    state: 'New Jersey', 
    party: 'D',
    governor: { 
      name: 'Phil Murphy', 
      party: 'D', 
      since: '2018' 
    }
  },
  'nm': { 
    state: 'New Mexico', 
    party: 'D',
    governor: { 
      name: 'Michelle Lujan Grisham', 
      party: 'D', 
      since: '2019' 
    }
  },
  'ny': { 
    state: 'New York', 
    party: 'D',
    governor: { 
      name: 'Kathy Hochul', 
      party: 'D', 
      since: '2021' 
    }
  },
  'nc': { 
    state: 'North Carolina', 
    party: 'D',
    governor: { 
      name: 'Roy Cooper', 
      party: 'D', 
      since: '2017' 
    }
  },
  'nd': { 
    state: 'North Dakota', 
    party: 'R',
    governor: { 
      name: 'Doug Burgum', 
      party: 'R', 
      since: '2019' 
    }
  },
  'oh': { 
    state: 'Ohio', 
    party: 'R',
    governor: { 
      name: 'Mike DeWine', 
      party: 'R', 
      since: '2019' 
    }
  },
  'ok': { 
    state: 'Oklahoma', 
    party: 'R',
    governor: { 
      name: 'Kevin Stitt', 
      party: 'R', 
      since: '2019' 
    }
  },
  'or': { 
    state: 'Oregon', 
    party: 'D',
    governor: { 
      name: 'Tina Kotek', 
      party: 'D', 
      since: '2023' 
    }
  },
  'pa': { 
    state: 'Pennsylvania', 
    party: 'D',
    governor: { 
      name: 'Josh Shapiro', 
      party: 'D', 
      since: '2023' 
    }
  },
  'ri': { 
    state: 'Rhode Island', 
    party: 'D',
    governor: { 
      name: 'Dan McKee', 
      party: 'D', 
      since: '2021' 
    }
  },
  'sc': { 
    state: 'South Carolina', 
    party: 'R',
    governor: { 
      name: 'Henry McMaster', 
      party: 'R', 
      since: '2017' 
    }
  },
  'sd': { 
    state: 'South Dakota', 
    party: 'R',
    governor: { 
      name: 'Kristi Noem', 
      party: 'R', 
      since: '2019' 
    }
  },
  'tn': { 
    state: 'Tennessee', 
    party: 'R',
    governor: { 
      name: 'Bill Lee', 
      party: 'R', 
      since: '2019' 
    }
  },
  'tx': { 
    state: 'Texas', 
    party: 'R',
    governor: { 
      name: 'Greg Abbott', 
      party: 'R', 
      since: '2019' 
    }
  },
  'ut': { 
    state: 'Utah', 
    party: 'R',
    governor: { 
      name: 'Spencer Cox', 
      party: 'R', 
      since: '2019' 
    }
  },
  'vt': { 
    state: 'Vermont', 
    party: 'R',
    governor: { 
      name: 'Phil Scott', 
      party: 'R', 
      since: '2017' 
    }
  },
  'va': { 
    state: 'Virginia', 
    party: 'R',
    governor: { 
      name: 'Glenn Youngkin', 
      party: 'R', 
      since: '2022' 
    }
  },
  'wa': { 
    state: 'Washington', 
    party: 'D',
    governor: { 
      name: 'Jay Inslee', 
      party: 'D', 
      since: '2013' 
    }
  },
  'wv': { 
    state: 'West Virginia', 
    party: 'R',
    governor: { 
      name: 'Jim Justice', 
      party: 'R', 
      since: '2017' 
    }
  },
  'wi': { 
    state: 'Wisconsin', 
    party: 'D',
    governor: { 
      name: 'Tony Evers', 
      party: 'D', 
      since: '2019' 
    }
  },
  'wy': { 
    state: 'Wyoming', 
    party: 'R',
    governor: { 
      name: 'Mark Gordon', 
      party: 'R', 
      since: '2019' 
    }
  }
}; 