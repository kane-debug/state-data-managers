import { PrismaClient, Senator, Representative } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

interface CongressMember {
  id: string;
  first_name: string;
  last_name: string;
  party: string;
  state: string;
  district?: string;
  next_election?: string;
  twitter_account?: string;
  facebook_account?: string;
  url?: string;
}

type SenatorUpdates = Partial<Pick<Senator, 'party'>>;
type RepresentativeUpdates = Partial<Pick<Representative, 'party'>>;

export class CongressApiService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor() {
    this.apiKey = process.env.CONGRESS_API_KEY || '';
    this.baseUrl = 'https://api.congress.gov/v3';
  }

  private async fetchWithAuth(endpoint: string) {
    try {
      const response = await axios.get(`${this.baseUrl}${endpoint}`, {
        headers: {
          'X-API-Key': this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching from Congress API:', error);
      throw error;
    }
  }

  async updateSenators() {
    try {
      const senators = await this.fetchWithAuth('/senate/members/current');
      
      for (const senator of senators.members) {
        const existingSenator = await prisma.senator.findFirst({
          where: {
            name: `${senator.first_name} ${senator.last_name}`,
            state: { id: senator.state }
          }
        });

        if (existingSenator) {
          // Check for changes
          const updates: SenatorUpdates = {};
          if (existingSenator.party !== senator.party) updates.party = senator.party;
          
          if (Object.keys(updates).length > 0) {
            const field = Object.keys(updates)[0] as keyof SenatorUpdates;
            // Create pending update
            await prisma.dataUpdate.create({
              data: {
                entityType: 'senator',
                entityId: existingSenator.id,
                field,
                oldValue: String(existingSenator[field]),
                newValue: String(updates[field]),
                source: 'congress_api',
                status: 'pending'
              }
            });
          }
        }
      }
    } catch (error) {
      console.error('Error updating senators:', error);
      throw error;
    }
  }

  async updateRepresentatives() {
    try {
      const representatives = await this.fetchWithAuth('/house/members/current');
      
      for (const rep of representatives.members) {
        const existingRep = await prisma.representative.findFirst({
          where: {
            name: `${rep.first_name} ${rep.last_name}`,
            state: { id: rep.state },
            district: parseInt(rep.district || '1')
          }
        });

        if (existingRep) {
          // Check for changes
          const updates: RepresentativeUpdates = {};
          if (existingRep.party !== rep.party) updates.party = rep.party;
          
          if (Object.keys(updates).length > 0) {
            const field = Object.keys(updates)[0] as keyof RepresentativeUpdates;
            // Create pending update
            await prisma.dataUpdate.create({
              data: {
                entityType: 'representative',
                entityId: existingRep.id,
                field,
                oldValue: String(existingRep[field]),
                newValue: String(updates[field]),
                source: 'congress_api',
                status: 'pending'
              }
            });
          }
        }
      }
    } catch (error) {
      console.error('Error updating representatives:', error);
      throw error;
    }
  }

  async checkForUpdates() {
    await this.updateSenators();
    await this.updateRepresentatives();
  }
} 