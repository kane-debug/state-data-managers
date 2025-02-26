export type PartyAffiliation = 'Republican' | 'Democrat';

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
}

// Current governors as of 2025
export const stateGovernors: Record<string, StateGovernor> = {
  'al': {
    state: 'Alabama',
    party: 'Republican'
  },
  'ak': { state: 'Alaska', governor: { name: 'Mike Dunleavy', party: 'Republican', since: '2019' }, party: 'Republican' },
  'az': { state: 'Arizona', governor: { name: 'Katie Hobbs', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'ar': { state: 'Arkansas', governor: { name: 'Sarah Huckabee Sanders', party: 'Republican', since: '2023' }, party: 'Republican' },
  'ca': {
    state: 'California',
    party: 'Democrat',
    governor: {
      name: 'Gavin Newsom',
      party: 'Democrat',
      since: '2019',
      imageUrl: '/governors/gavin-newsom.jpg'
    }
  },
  'co': { state: 'Colorado', governor: { name: 'Jared Polis', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'ct': { state: 'Connecticut', governor: { name: 'Ned Lamont', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'de': { state: 'Delaware', governor: { name: 'John Carney', party: 'Democrat', since: '2017' }, party: 'Democrat' },
  'fl': { state: 'Florida', governor: { name: 'Ron DeSantis', party: 'Republican', since: '2019' }, party: 'Republican' },
  'ga': { state: 'Georgia', governor: { name: 'Brian Kemp', party: 'Republican', since: '2019' }, party: 'Republican' },
  'hi': { state: 'Hawaii', governor: { name: 'Josh Green', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'id': { state: 'Idaho', governor: { name: 'Brad Little', party: 'Republican', since: '2019' }, party: 'Republican' },
  'il': { state: 'Illinois', governor: { name: 'JB Pritzker', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'in': { state: 'Indiana', governor: { name: 'Eric Holcomb', party: 'Republican', since: '2017' }, party: 'Republican' },
  'ia': { state: 'Iowa', governor: { name: 'Kim Reynolds', party: 'Republican', since: '2017' }, party: 'Republican' },
  'ks': { state: 'Kansas', governor: { name: 'Laura Kelly', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'ky': { state: 'Kentucky', governor: { name: 'Andy Beshear', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'la': { state: 'Louisiana', governor: { name: 'Jeff Landry', party: 'Republican', since: '2019' }, party: 'Republican' },
  'me': { state: 'Maine', governor: { name: 'Janet Mills', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'md': { state: 'Maryland', governor: { name: 'Wes Moore', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'ma': { state: 'Massachusetts', governor: { name: 'Maura Healey', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'mi': { state: 'Michigan', governor: { name: 'Gretchen Whitmer', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'mn': { state: 'Minnesota', governor: { name: 'Tim Walz', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'ms': { state: 'Mississippi', governor: { name: 'Tate Reeves', party: 'Republican', since: '2019' }, party: 'Republican' },
  'mo': { state: 'Missouri', governor: { name: 'Mike Parson', party: 'Republican', since: '2019' }, party: 'Republican' },
  'mt': { state: 'Montana', governor: { name: 'Greg Gianforte', party: 'Republican', since: '2019' }, party: 'Republican' },
  'ne': { state: 'Nebraska', governor: { name: 'Jim Pillen', party: 'Republican', since: '2019' }, party: 'Republican' },
  'nv': { state: 'Nevada', governor: { name: 'Joe Lombardo', party: 'Republican', since: '2023' }, party: 'Republican' },
  'nh': { state: 'New Hampshire', governor: { name: 'Chris Sununu', party: 'Republican', since: '2017' }, party: 'Republican' },
  'nj': { state: 'New Jersey', governor: { name: 'Phil Murphy', party: 'Democrat', since: '2018' }, party: 'Democrat' },
  'nm': { state: 'New Mexico', governor: { name: 'Michelle Lujan Grisham', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'ny': { state: 'New York', governor: { name: 'Kathy Hochul', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'nc': { state: 'North Carolina', governor: { name: 'Roy Cooper', party: 'Democrat', since: '2017' }, party: 'Democrat' },
  'nd': { state: 'North Dakota', governor: { name: 'Doug Burgum', party: 'Republican', since: '2019' }, party: 'Republican' },
  'oh': { state: 'Ohio', governor: { name: 'Mike DeWine', party: 'Republican', since: '2019' }, party: 'Republican' },
  'ok': { state: 'Oklahoma', governor: { name: 'Kevin Stitt', party: 'Republican', since: '2019' }, party: 'Republican' },
  'or': { state: 'Oregon', governor: { name: 'Tina Kotek', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'pa': { state: 'Pennsylvania', governor: { name: 'Josh Shapiro', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'ri': { state: 'Rhode Island', governor: { name: 'Dan McKee', party: 'Democrat', since: '2023' }, party: 'Democrat' },
  'sc': { state: 'South Carolina', governor: { name: 'Henry McMaster', party: 'Republican', since: '2019' }, party: 'Republican' },
  'sd': { state: 'South Dakota', governor: { name: 'Kristi Noem', party: 'Republican', since: '2019' }, party: 'Republican' },
  'tn': { state: 'Tennessee', governor: { name: 'Bill Lee', party: 'Republican', since: '2019' }, party: 'Republican' },
  'tx': { state: 'Texas', governor: { name: 'Greg Abbott', party: 'Republican', since: '2019' }, party: 'Republican' },
  'ut': { state: 'Utah', governor: { name: 'Spencer Cox', party: 'Republican', since: '2019' }, party: 'Republican' },
  'vt': { state: 'Vermont', governor: { name: 'Phil Scott', party: 'Republican', since: '2017' }, party: 'Republican' },
  'va': { state: 'Virginia', governor: { name: 'Glenn Youngkin', party: 'Republican', since: '2022' }, party: 'Republican' },
  'wa': { state: 'Washington', governor: { name: 'Jay Inslee', party: 'Democrat', since: '2013' }, party: 'Democrat' },
  'wv': { state: 'West Virginia', governor: { name: 'Jim Justice', party: 'Republican', since: '2019' }, party: 'Republican' },
  'wi': { state: 'Wisconsin', governor: { name: 'Tony Evers', party: 'Democrat', since: '2019' }, party: 'Democrat' },
  'wy': { state: 'Wyoming', governor: { name: 'Mark Gordon', party: 'Republican', since: '2019' }, party: 'Republican' }
}; 