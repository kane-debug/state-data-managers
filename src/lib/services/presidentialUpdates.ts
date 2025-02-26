import { Post } from '@/lib/types';

const CACHE_KEY = 'presidential-updates';
const INAUGURATION_DATE = new Date('2025-01-20T12:00:00Z');

// Current administration updates from 2025
const SAMPLE_UPDATES = [
  {
    title: "President Trump Signs Executive Order on Border Security",
    content: "President Trump signed a comprehensive Executive Order strengthening border security measures and implementing new immigration policies. The order includes provisions for enhanced wall construction and border patrol resources.",
    date: "2025-02-23T15:30:00Z",
    type: "action",
    url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2025/02/23/border-security-executive-order",
    summary: "Executive Order strengthening border security measures and implementing new immigration policies."
  },
  {
    title: "Press Briefing by Press Secretary",
    content: "The Press Secretary delivered updates on the administration's economic initiatives, including new trade negotiations with China and domestic manufacturing growth.",
    date: "2025-02-23T14:00:00Z",
    type: "press",
    url: "https://www.whitehouse.gov/briefing-room/press-briefings/2025/02/23/press-briefing",
    summary: "Updates on economic initiatives, trade negotiations with China, and domestic manufacturing growth."
  },
  {
    title: "Statement from President Trump on Record Stock Market Gains",
    content: "The President released a statement highlighting unprecedented stock market performance and economic growth in the first month of his administration.",
    date: "2025-02-22T16:15:00Z",
    type: "official",
    url: "https://www.whitehouse.gov/briefing-room/statements-releases/2025/02/22/market-statement",
    summary: "Statement on record-breaking stock market performance and economic growth."
  },
  {
    title: "Remarks by President Trump at the America First Economic Summit",
    content: "President Trump delivered remarks at the America First Economic Summit, outlining his vision for continued economic growth, deregulation, and American energy independence.",
    date: "2025-02-21T13:45:00Z",
    type: "speech",
    url: "https://www.whitehouse.gov/briefing-room/speeches-remarks/2025/02/21/america-first-summit",
    summary: "Remarks on economic growth, deregulation, and American energy independence."
  },
  {
    title: "Executive Order on American Energy Independence",
    content: "President Trump signed an Executive Order promoting American energy independence and dominance, including measures to increase domestic oil and natural gas production.",
    date: "2025-02-15T11:30:00Z",
    type: "action",
    url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2025/02/15/energy-independence-order",
    summary: "Executive Order promoting American energy independence and domestic energy production."
  },
  {
    title: "Statement on New Trade Deal with European Union",
    content: "The administration announced a historic new trade agreement with the European Union, securing better terms for American workers and businesses.",
    date: "2025-02-10T14:20:00Z",
    type: "official",
    url: "https://www.whitehouse.gov/briefing-room/statements-releases/2025/02/10/eu-trade-deal",
    summary: "Announcement of new trade agreement with the European Union."
  },
  {
    title: "Inaugural Address by President Donald J. Trump",
    content: "President Trump delivered his inaugural address, outlining his vision for his new term and commitment to the America First agenda.",
    date: "2025-01-20T12:30:00Z",
    type: "speech",
    url: "https://www.whitehouse.gov/briefing-room/speeches-remarks/2025/01/20/inaugural-address",
    summary: "President Trump's inaugural address outlining vision for new term."
  }
];

async function fetchPresidentialUpdates(forceRefresh = false): Promise<{ posts: Post[]; lastUpdated: Date | null }> {
  try {
    // Convert sample updates to Post format and ensure they're after inauguration
    const posts: Post[] = SAMPLE_UPDATES
      .filter(update => new Date(update.date) >= INAUGURATION_DATE)
      .map(update => ({
        id: update.url,
        authorId: 'whitehouse',
        content: `${update.title}\n\n${update.summary}`,
        images: [],
        likes: [],
        reposts: [],
        comments: [],
        createdAt: new Date(update.date),
        updatedAt: new Date(update.date),
        isOfficial: true,
        type: update.type as 'press' | 'official' | 'speech' | 'action',
        source: 'whitehouse.gov',
        sourceUrl: update.url
      }));

    return {
      posts: posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
      lastUpdated: new Date()
    };
  } catch (error) {
    console.error('Error fetching presidential updates:', error);
    return {
      posts: [],
      lastUpdated: null
    };
  }
}

export { fetchPresidentialUpdates }; 