import { ExtendedStateData } from '../types/stateTypes';

export const stateData: Record<string, ExtendedStateData> = {
  IN: {
    info: {
      capital: "Indianapolis",
      population: 6785528,
      largestCity: "Indianapolis",
      statehood: "December 11, 1816",
      nickname: "The Hoosier State",
      governmentWebsite: "https://www.in.gov"
    },
    governor: {
      name: "Eric Holcomb",
      party: "Republican",
      since: "2017",
      initiatives: [
        "Economic Development",
        "Workforce Development",
        "Infrastructure Investment"
      ],
      socialLinks: {
        website: "https://www.in.gov/gov",
        twitter: "https://twitter.com/GovHolcomb",
        facebook: "https://www.facebook.com/GovHolcomb"
      }
    },
    senators: [
      {
        name: "Todd Young",
        party: "Republican",
        since: "2017",
        socialLinks: {
          website: "https://www.young.senate.gov",
          twitter: "https://twitter.com/SenToddYoung"
        }
      },
      {
        name: "Mike Braun",
        party: "Republican",
        since: "2019",
        socialLinks: {
          website: "https://www.braun.senate.gov",
          twitter: "https://twitter.com/SenatorBraun"
        }
      }
    ],
    representatives: [
      { name: "Frank Mrvan", party: "Democratic", district: "1st District" },
      { name: "Rudy Yakym", party: "Republican", district: "2nd District" },
      { name: "Jim Banks", party: "Republican", district: "3rd District" },
      { name: "Jim Baird", party: "Republican", district: "4th District" },
      { name: "Victoria Spartz", party: "Republican", district: "5th District" },
      { name: "Greg Pence", party: "Republican", district: "6th District" },
      { name: "André Carson", party: "Democratic", district: "7th District" },
      { name: "Larry Bucshon", party: "Republican", district: "8th District" },
      { name: "Erin Houchin", party: "Republican", district: "9th District" }
    ],
    legislature: {
      houseMajority: "Republican",
      senateMajority: "Republican",
      houseSeats: 100,
      senateSeats: 50,
      nextElection: "November 5, 2024",
      sessionDates: "January 8, 2024 - March 14, 2024"
    },
    bills: [
      {
        title: "HB 1001 - Economic Development Act",
        description: "Comprehensive economic growth and job creation",
        status: "Passed House",
        category: "Economy",
        lastAction: "Senate Commerce Committee Review",
        lastUpdated: "2024-02-20",
        source: "http://iga.in.gov/legislative/2024/bills/house/1001"
      },
      {
        title: "SB 100 - Workforce Development",
        description: "Enhancing workforce training and education programs",
        status: "In Committee",
        category: "Employment",
        lastAction: "Senate Education Committee Hearing",
        lastUpdated: "2024-02-22",
        source: "http://iga.in.gov/legislative/2024/bills/senate/100"
      },
      {
        title: "HB 2000 - Infrastructure Investment",
        description: "Statewide infrastructure improvement program",
        status: "In Committee",
        category: "Infrastructure",
        lastAction: "House Transportation Committee Review",
        lastUpdated: "2024-02-23",
        source: "http://iga.in.gov/legislative/2024/bills/house/2000"
      }
    ],
    lastUpdated: "2024-02-25"
  },
  IA: {
    info: {
      capital: "Des Moines",
      population: 3190369,
      largestCity: "Des Moines",
      statehood: "December 28, 1846",
      nickname: "The Hawkeye State",
      governmentWebsite: "https://www.iowa.gov"
    },
    governor: {
      name: "Kim Reynolds",
      party: "Republican",
      since: "2017",
      initiatives: [
        "Education Reform",
        "Tax Reform",
        "Rural Development"
      ],
      socialLinks: {
        website: "https://governor.iowa.gov",
        twitter: "https://twitter.com/IAGovernor",
        facebook: "https://www.facebook.com/IAGovernor"
      }
    },
    senators: [
      {
        name: "Chuck Grassley",
        party: "Republican",
        since: "1981",
        socialLinks: {
          website: "https://www.grassley.senate.gov",
          twitter: "https://twitter.com/ChuckGrassley"
        }
      },
      {
        name: "Joni Ernst",
        party: "Republican",
        since: "2015",
        socialLinks: {
          website: "https://www.ernst.senate.gov",
          twitter: "https://twitter.com/SenJoniErnst"
        }
      }
    ],
    representatives: [
      { name: "Mariannette Miller-Meeks", party: "Republican", district: "1st District" },
      { name: "Ashley Hinson", party: "Republican", district: "2nd District" },
      { name: "Zach Nunn", party: "Republican", district: "3rd District" },
      { name: "Randy Feenstra", party: "Republican", district: "4th District" }
    ],
    legislature: {
      houseMajority: "Republican",
      senateMajority: "Republican",
      houseSeats: 100,
      senateSeats: 50,
      nextElection: "November 5, 2024",
      sessionDates: "January 8, 2024 - April 30, 2024"
    },
    bills: [
      {
        title: "HF 1 - Education Reform Act",
        description: "Comprehensive education system improvements",
        status: "Passed House",
        category: "Education",
        lastAction: "Senate Education Committee Review",
        lastUpdated: "2024-02-20",
        source: "https://www.legis.iowa.gov/legislation/BillBook?ba=HF1"
      },
      {
        title: "SF 100 - Tax Reform Initiative",
        description: "Modernizing state tax structure",
        status: "In Committee",
        category: "Taxation",
        lastAction: "Senate Ways and Means Committee Hearing",
        lastUpdated: "2024-02-22",
        source: "https://www.legis.iowa.gov/legislation/BillBook?ba=SF100"
      },
      {
        title: "HF 2000 - Rural Development",
        description: "Supporting rural community growth and sustainability",
        status: "In Committee",
        category: "Development",
        lastAction: "House Economic Growth Committee Review",
        lastUpdated: "2024-02-23",
        source: "https://www.legis.iowa.gov/legislation/BillBook?ba=HF2000"
      }
    ],
    lastUpdated: "2024-02-25"
  }
}; 