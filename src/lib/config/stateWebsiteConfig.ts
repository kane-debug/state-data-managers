interface StateWebsiteConfig {
  url: string;
  selectors: {
    name: string;
    party?: string;
    since?: string;
    imageUrl?: string;
  };
  partyIdentifiers?: {
    democratic: string[];
    republican: string[];
  };
}

const defaultPartyIdentifiers = {
  democratic: ['democrat', 'democratic party', '(d)'],
  republican: ['republican', 'republican party', '(r)']
};

export const stateWebsiteConfigs: Record<string, StateWebsiteConfig> = {
  AL: {
    url: 'https://governor.alabama.gov',
    selectors: {
      name: '.governor-name, .official-name, h1.entry-title',
      party: '.party-affiliation, .governor-party',
      since: '.took-office, .governor-since',
      imageUrl: '.governor-image img, .official-photo img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  AK: {
    url: 'https://gov.alaska.gov',
    selectors: {
      name: '.gov-name, .governor-name, .alaska-governor',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  AZ: {
    url: 'https://azgovernor.gov',
    selectors: {
      name: '.page-title h1, .governor-name',
      party: '.governor-details .party',
      since: '.governor-details .term-start',
      imageUrl: '.governor-image img, .featured-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  AR: {
    url: 'https://governor.arkansas.gov',
    selectors: {
      name: '.governor-name, .page-title h1',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-photo img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  CA: {
    url: 'https://www.gov.ca.gov',
    selectors: {
      name: '.header-governor-name, .governor-name',
      party: '.governor-info .party-affiliation',
      since: '.governor-info .term-began',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  CO: {
    url: 'https://www.colorado.gov/governor',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  CT: {
    url: 'https://portal.ct.gov/governor',
    selectors: {
      name: '.gov-name, .page-title',
      party: '.governor-meta .party',
      since: '.governor-meta .term',
      imageUrl: '.governor-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  DE: {
    url: 'https://governor.delaware.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  FL: {
    url: 'https://www.flgov.com',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-meta .party',
      since: '.governor-meta .term-start',
      imageUrl: '.governor-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  GA: {
    url: 'https://gov.georgia.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  HI: {
    url: 'https://governor.hawaii.gov',
    selectors: {
      name: '.governor-name, h1.entry-title',
      party: '.governor-meta .party',
      since: '.governor-meta .term-start',
      imageUrl: '.governor-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  ID: {
    url: 'https://gov.idaho.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  IL: {
    url: 'https://www2.illinois.gov/gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  IN: {
    url: 'https://www.in.gov/gov',
    selectors: {
      name: '.governor-name, .title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  IA: {
    url: 'https://governor.iowa.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  KS: {
    url: 'https://governor.kansas.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  KY: {
    url: 'https://governor.ky.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-meta .party',
      since: '.governor-meta .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  LA: {
    url: 'https://gov.louisiana.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  ME: {
    url: 'https://www.maine.gov/governor',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  MD: {
    url: 'https://governor.maryland.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  MA: {
    url: 'https://www.mass.gov/governor',
    selectors: {
      name: '.ma__page-header__title, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  MI: {
    url: 'https://www.michigan.gov/whitmer',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  MN: {
    url: 'https://mn.gov/governor',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  MS: {
    url: 'https://governorreeves.ms.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  MO: {
    url: 'https://governor.mo.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  MT: {
    url: 'https://governor.mt.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  NE: {
    url: 'https://governor.nebraska.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  NV: {
    url: 'https://gov.nv.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  NH: {
    url: 'https://www.governor.nh.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  NJ: {
    url: 'https://nj.gov/governor',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  NM: {
    url: 'https://www.governor.state.nm.us',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  NY: {
    url: 'https://www.governor.ny.gov',
    selectors: {
      name: '.nygov-hero__title, .governor-name',
      party: '.governor-details .party',
      since: '.governor-details .term-start',
      imageUrl: '.nygov-hero__image img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  NC: {
    url: 'https://governor.nc.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  ND: {
    url: 'https://www.governor.nd.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  OH: {
    url: 'https://governor.ohio.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  OK: {
    url: 'https://www.governor.ok.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  OR: {
    url: 'https://www.oregon.gov/gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  PA: {
    url: 'https://www.governor.pa.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  RI: {
    url: 'https://governor.ri.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  SC: {
    url: 'https://governor.sc.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  SD: {
    url: 'https://sd.gov/governor',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  TN: {
    url: 'https://www.tn.gov/governor',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  TX: {
    url: 'https://gov.texas.gov',
    selectors: {
      name: '.governor-name, .official-name',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  UT: {
    url: 'https://governor.utah.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  VT: {
    url: 'https://governor.vermont.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  VA: {
    url: 'https://www.governor.virginia.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  WA: {
    url: 'https://www.governor.wa.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  WV: {
    url: 'https://governor.wv.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  WI: {
    url: 'https://evers.wi.gov',
    selectors: {
      name: '.governor-name, .page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  },
  WY: {
    url: 'https://governor.wyo.gov',
    selectors: {
      name: '.governor-name, h1.page-title',
      party: '.governor-info .party',
      since: '.governor-info .term-start',
      imageUrl: '.governor-portrait img'
    },
    partyIdentifiers: defaultPartyIdentifiers
  }
}; 