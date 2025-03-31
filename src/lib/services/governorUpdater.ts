import axios from 'axios';
import * as cheerio from 'cheerio';
import type { State } from '../types/state';
import { stateWebsiteConfigs } from '../config/stateWebsiteConfig';
import { sleep } from '../utils';

interface GovernorData {
  name: string;
  state: string;
  party: 'D' | 'R' | 'I';
  since: string;
  websiteUrl: string;
  imageUrl?: string;
}

// Map of state codes to their official governor website URLs
const STATE_GOVERNOR_URLS = {
  AL: 'https://governor.alabama.gov',
  AK: 'https://gov.alaska.gov',
  // ... add all state URLs
};

async function fetchNGAData(): Promise<GovernorData[]> {
  try {
    const response = await axios.get('https://www.nga.org/api/v1/governors', {
      headers: {
        'Authorization': `Bearer ${process.env.NGA_API_KEY}`
      }
    });
    
    return response.data.map((gov: any) => ({
      name: `${gov.first_name} ${gov.last_name}`,
      state: gov.state_code,
      party: gov.party === 'Democratic' ? 'D' : gov.party === 'Republican' ? 'R' : 'I',
      since: gov.took_office,
      websiteUrl: gov.website_url,
      imageUrl: gov.image_url
    }));
  } catch (error) {
    console.error('Error fetching NGA data:', error);
    return [];
  }
}

async function scrapeStateWebsite(stateCode: string): Promise<Partial<GovernorData> | null> {
  const config = stateWebsiteConfigs[stateCode];
  if (!config) {
    console.warn(`No scraping configuration found for state: ${stateCode}`);
    return null;
  }

  try {
    const response = await axios.get(config.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; StateDataBot/1.0; +http://example.com/bot)'
      },
      timeout: 10000
    });

    const $ = cheerio.load(response.data);
    
    // Extract data using configured selectors
    const name = $(config.selectors.name).first().text().trim();
    let party: 'D' | 'R' | 'I' = 'I';
    let since = '';
    let imageUrl = '';

    // Extract party affiliation
    if (config.selectors.party) {
      const partyText = $(config.selectors.party).text().trim().toLowerCase();
      if (config.partyIdentifiers) {
        if (config.partyIdentifiers.democratic.some(id => partyText.includes(id))) {
          party = 'D';
        } else if (config.partyIdentifiers.republican.some(id => partyText.includes(id))) {
          party = 'R';
        }
      }
    }

    // Extract since date
    if (config.selectors.since) {
      since = $(config.selectors.since).text().trim();
    }

    // Extract image URL
    if (config.selectors.imageUrl) {
      const imgElement = $(config.selectors.imageUrl).first();
      imageUrl = imgElement.attr('src') || '';
      
      // Handle relative URLs
      if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = new URL(imageUrl, config.url).toString();
      }
    }

    return {
      name,
      state: stateCode,
      party,
      since,
      websiteUrl: config.url,
      imageUrl
    };
  } catch (error) {
    console.error(`Error scraping ${stateCode} governor website:`, error);
    return null;
  }
}

export async function updateGovernors(stateData: Record<string, State>) {
  try {
    // 1. Fetch from NGA API
    const ngaGovernors = await fetchNGAData();
    let updatedCount = 0;
    let errorCount = 0;
    
    // 2. Validate with state websites
    for (const governor of ngaGovernors) {
      try {
        // Add delay between requests to avoid overwhelming servers
        await sleep(1000);

        const scrapedData = await scrapeStateWebsite(governor.state);
        
        // If scraped data exists and names don't match, log for manual review
        if (scrapedData?.name && !namesMatch(scrapedData.name, governor.name)) {
          console.warn(`Data mismatch for ${governor.state}:`, {
            nga: governor.name,
            scraped: scrapedData.name
          });
          errorCount++;
          continue;
        }

        // Update state data
        if (stateData[governor.state]) {
          stateData[governor.state].governor = {
            name: governor.name,
            party: governor.party,
            since: governor.since,
            socialLinks: [{
              platform: 'website',
              url: governor.websiteUrl
            }],
            imageUrl: governor.imageUrl || scrapedData?.imageUrl
          };
          updatedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${governor.state}:`, error);
        errorCount++;
      }
    }

    console.log(`Governor updates completed: ${updatedCount} successful, ${errorCount} errors`);
    return errorCount === 0;
  } catch (error) {
    console.error('Error updating governors:', error);
    return false;
  }
}

// Helper function to compare names accounting for different formats
function namesMatch(name1: string, name2: string): boolean {
  const normalize = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };
  
  return normalize(name1) === normalize(name2);
} 