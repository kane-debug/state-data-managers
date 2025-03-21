import { PrismaClient, Senator, Representative, SocialLink } from '@prisma/client';
import axios, { AxiosError } from 'axios';

const prisma = new PrismaClient();

interface CongressMember {
  bioguideId: string;
  name: string;
  partyName: string;
  state: string;
  district?: number;
  terms: {
    item: Array<{
      chamber: string;
      startYear: number;
      endYear?: number;
    }>;
  };
  depiction?: {
    imageUrl: string;
  };
  url?: string;
}

interface SenatorUpdates {
  party?: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    website?: string;
  };
}

interface RepresentativeUpdates {
  party?: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    website?: string;
  };
}

export class CongressApiService {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly maxRetries: number;
  private readonly retryDelay: number;

  constructor() {
    const apiKey = process.env.CONGRESS_API_KEY;
    if (!apiKey) {
      throw new Error('CONGRESS_API_KEY environment variable is not set');
    }
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.congress.gov/v3';
    this.maxRetries = 3;
    this.retryDelay = 1000; // 1 second
  }

  private async fetchWithAuth(endpoint: string, retryCount = 0): Promise<any> {
    try {
      console.log(`Fetching from Congress API: ${this.baseUrl}${endpoint}`);
      const response = await axios.get(`${this.baseUrl}${endpoint}`, {
        headers: {
          'X-API-Key': this.apiKey
        },
        timeout: 10000 // 10 second timeout
      });
      console.log('Congress API response received');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Congress API error details:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          endpoint,
          retryCount
        });

        // Handle rate limiting
        if (error.response?.status === 429 && retryCount < this.maxRetries) {
          console.log(`Rate limited, retrying in ${this.retryDelay * (retryCount + 1)}ms`);
          await new Promise(resolve => setTimeout(resolve, this.retryDelay * (retryCount + 1)));
          return this.fetchWithAuth(endpoint, retryCount + 1);
        }

        // Handle other API errors
        if (error.response?.status === 401) {
          throw new Error('Invalid API key');
        }
        if (error.response?.status === 403) {
          throw new Error('API key does not have permission to access this endpoint');
        }
      }

      // Log the error for debugging
      console.error('Congress API error:', {
        endpoint,
        error: error instanceof Error ? error.message : 'Unknown error',
        retryCount
      });

      throw error;
    }
  }

  private parseName(fullName: string): { firstName: string; lastName: string } {
    // Congress API returns names in format "Last, First" or "Last First"
    const parts = fullName.split(', ');
    if (parts.length === 2) {
      return {
        lastName: parts[0],
        firstName: parts[1]
      };
    }
    // Fallback for names without comma
    const nameParts = fullName.split(' ');
    if (nameParts.length >= 2) {
      return {
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(' ')
      };
    }
    // If we can't parse the name properly, return the full name as both first and last
    return {
      firstName: fullName,
      lastName: fullName
    };
  }

  async updateSenators() {
    try {
      console.log('Starting senator update process');
      const response = await this.fetchWithAuth('/member?chamber=Senate&congress=118');
      const senators = response.members || [];
      console.log(`Retrieved ${senators.length} senators`);
      
      for (const senator of senators) {
        const { firstName, lastName } = this.parseName(senator.name);
        console.log(`Processing senator: ${firstName} ${lastName}`);
        
        const existingSenator = await prisma.senator.findFirst({
          where: {
            name: `${firstName} ${lastName}`,
            state: { id: senator.state }
          },
          include: {
            socialLinks: true
          }
        });

        if (existingSenator) {
          console.log(`Found existing senator: ${existingSenator.id}`);
          const updates: SenatorUpdates = {};
          
          // Check for party changes
          if (existingSenator.party !== senator.partyName) {
            updates.party = senator.partyName;
            console.log(`Party change detected: ${existingSenator.party} -> ${senator.partyName}`);
          }

          // Check for social link changes
          const currentSocialLinks = existingSenator.socialLinks.reduce((acc, link) => {
            acc[link.platform] = link.url;
            return acc;
          }, {} as Record<string, string>);

          const newSocialLinks = {
            twitter: undefined, // Congress API v3 doesn't provide social links
            facebook: undefined,
            website: senator.url
          };

          if (JSON.stringify(currentSocialLinks) !== JSON.stringify(newSocialLinks)) {
            updates.socialLinks = newSocialLinks;
            console.log('Social links changes detected:', {
              current: currentSocialLinks,
              new: newSocialLinks
            });
          }
          
          if (Object.keys(updates).length > 0) {
            console.log('Creating pending updates for senator');
            // Create pending updates for each changed field
            for (const [field, newValue] of Object.entries(updates)) {
              if (field === 'socialLinks') {
                // Handle social links separately
                const socialLinks = newValue as Record<string, string | undefined>;
                for (const [platform, url] of Object.entries(socialLinks)) {
                  if (url) {
                    await prisma.dataUpdate.create({
                      data: {
                        entityType: 'senator',
                        entityId: existingSenator.id,
                        field: `socialLinks.${platform}`,
                        oldValue: currentSocialLinks[platform] || '',
                        newValue: url,
                        source: 'congress_api',
                        status: 'pending'
                      }
                    });
                    console.log(`Created update for ${platform} link`);
                  }
                }
              } else {
                await prisma.dataUpdate.create({
                  data: {
                    entityType: 'senator',
                    entityId: existingSenator.id,
                    field,
                    oldValue: String(existingSenator[field as keyof Senator]),
                    newValue: String(newValue),
                    source: 'congress_api',
                    status: 'pending'
                  }
                });
                console.log(`Created update for ${field}`);
              }
            }
          }
        } else {
          console.log(`No existing senator found for ${firstName} ${lastName}`);
        }
      }
      console.log('Senator update process completed');
    } catch (error) {
      console.error('Error updating senators:', error);
      throw error;
    }
  }

  async updateRepresentatives() {
    try {
      console.log('Starting representative update process');
      const response = await this.fetchWithAuth('/member?chamber=House&congress=118');
      const representatives = response.members || [];
      console.log(`Retrieved ${representatives.length} representatives`);
      
      for (const rep of representatives) {
        const { firstName, lastName } = this.parseName(rep.name);
        console.log(`Processing representative: ${firstName} ${lastName}`);
        
        const existingRep = await prisma.representative.findFirst({
          where: {
            name: `${firstName} ${lastName}`,
            state: { id: rep.state },
            district: rep.district || 1
          },
          include: {
            socialLinks: true
          }
        });

        if (existingRep) {
          console.log(`Found existing representative: ${existingRep.id}`);
          const updates: RepresentativeUpdates = {};
          
          // Check for party changes
          if (existingRep.party !== rep.partyName) {
            updates.party = rep.partyName;
            console.log(`Party change detected: ${existingRep.party} -> ${rep.partyName}`);
          }

          // Check for social link changes
          const currentSocialLinks = existingRep.socialLinks.reduce((acc, link) => {
            acc[link.platform] = link.url;
            return acc;
          }, {} as Record<string, string>);

          const newSocialLinks = {
            twitter: undefined, // Congress API v3 doesn't provide social links
            facebook: undefined,
            website: rep.url
          };

          if (JSON.stringify(currentSocialLinks) !== JSON.stringify(newSocialLinks)) {
            updates.socialLinks = newSocialLinks;
            console.log('Social links changes detected:', {
              current: currentSocialLinks,
              new: newSocialLinks
            });
          }
          
          if (Object.keys(updates).length > 0) {
            console.log('Creating pending updates for representative');
            // Create pending updates for each changed field
            for (const [field, newValue] of Object.entries(updates)) {
              if (field === 'socialLinks') {
                // Handle social links separately
                const socialLinks = newValue as Record<string, string | undefined>;
                for (const [platform, url] of Object.entries(socialLinks)) {
                  if (url) {
                    await prisma.dataUpdate.create({
                      data: {
                        entityType: 'representative',
                        entityId: existingRep.id,
                        field: `socialLinks.${platform}`,
                        oldValue: currentSocialLinks[platform] || '',
                        newValue: url,
                        source: 'congress_api',
                        status: 'pending'
                      }
                    });
                    console.log(`Created update for ${platform} link`);
                  }
                }
              } else {
                await prisma.dataUpdate.create({
                  data: {
                    entityType: 'representative',
                    entityId: existingRep.id,
                    field,
                    oldValue: String(existingRep[field as keyof Representative]),
                    newValue: String(newValue),
                    source: 'congress_api',
                    status: 'pending'
                  }
                });
                console.log(`Created update for ${field}`);
              }
            }
          }
        } else {
          console.log(`No existing representative found for ${firstName} ${lastName}`);
        }
      }
      console.log('Representative update process completed');
    } catch (error) {
      console.error('Error updating representatives:', error);
      throw error;
    }
  }

  async checkForUpdates() {
    try {
      console.log('Starting update check process');
      await this.updateSenators();
      await this.updateRepresentatives();
      console.log('Update check process completed');
    } catch (error) {
      console.error('Error checking for updates:', error);
      throw error;
    }
  }
} 