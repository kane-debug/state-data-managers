const CONGRESS_API_KEY = process.env.CONGRESS_API_KEY;
const API_BASE_URL = 'https://api.propublica.org/congress/v1';

interface CongressMember {
  id: string;
  first_name: string;
  last_name: string;
  twitter_account: string;
  facebook_account: string;
  youtube_account: string;
  url: string;
  state: string;
  party: string;
}

interface CongressApiResponse {
  status: string;
  results: {
    members: CongressMember[];
  }[];
}

export async function fetchCurrentCongress() {
  const chambers = ['senate', 'house'];
  const allMembers: CongressMember[] = [];

  for (const chamber of chambers) {
    try {
      const response = await fetch(`${API_BASE_URL}/118/${chamber}/members.json`, {
        headers: {
          'X-API-Key': CONGRESS_API_KEY!,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch ${chamber} members: ${response.statusText}`);
      }

      const data: CongressApiResponse = await response.json();
      allMembers.push(...data.results[0].members);
    } catch (error) {
      console.error(`Error fetching ${chamber} members:`, error);
      throw error;
    }
  }

  return allMembers;
}

export function transformCongressData(members: CongressMember[]) {
  const updates: any[] = [];

  for (const member of members) {
    const isSenator = member.state.length === 2; // Senators have state codes
    const update = {
      entityType: isSenator ? 'senator' : 'representative',
      state: member.state,
      data: {
        firstName: member.first_name,
        lastName: member.last_name,
        party: member.party,
        twitter: member.twitter_account || null,
        facebook: member.facebook_account || null,
        youtube: member.youtube_account || null,
        website: member.url || null,
      },
    };

    updates.push(update);
  }

  return updates;
} 