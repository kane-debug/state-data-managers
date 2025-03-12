import type { StateData } from '@/lib/types/state';

export const stateData: StateData = {
  CA: {
    name: 'California',
    capital: 'Sacramento',
    largestCity: 'Los Angeles',
    statehood: '1850',
    nickname: 'The Golden State',
    population: 39538223,
    electoralVotes: 54,
    representativesCount: 52,
    governor: {
      name: 'Gavin Newsom',
      party: 'D',
      since: '2019',
      imageUrl: 'https://www.gov.ca.gov/wp-content/uploads/2019/01/Gavin-Newsom-1-150x150.jpg',
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com/GavinNewsom' },
        { platform: 'facebook', url: 'https://www.facebook.com/GavinNewsom' },
        { platform: 'instagram', url: 'https://www.instagram.com/gavinnewsom' },
        { platform: 'website', url: 'https://www.gov.ca.gov' },
      ],
    },
    senators: [
      {
        name: 'Alex Padilla',
        party: 'D',
        since: '2021',
        imageUrl: 'https://www.padilla.senate.gov/wp-content/uploads/2021/01/ap-official-portrait-150x150.jpg',
        socialLinks: [
          { platform: 'twitter', url: 'https://twitter.com/SenAlexPadilla' },
          { platform: 'facebook', url: 'https://www.facebook.com/SenAlexPadilla' },
          { platform: 'website', url: 'https://www.padilla.senate.gov' },
        ],
      },
      {
        name: 'Laphonza Butler',
        party: 'D',
        since: '2023',
        imageUrl: 'https://www.butler.senate.gov/wp-content/uploads/2023/10/butler-official-portrait-150x150.jpg',
        socialLinks: [
          { platform: 'twitter', url: 'https://twitter.com/SenLaphonzaButler' },
          { platform: 'website', url: 'https://www.butler.senate.gov' },
        ],
      },
    ],
    representatives: [
      {
        name: 'Doug LaMalfa',
        party: 'R',
        district: 1,
        since: '2013',
        socialLinks: [
          { platform: 'twitter', url: 'https://twitter.com/RepLaMalfa' },
          { platform: 'website', url: 'https://lamalfa.house.gov' },
        ],
      },
      // Add more representatives as needed
    ],
  },
  // Add more states as needed
}; 