import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

interface SocialLink {
  platform: string;
  url: string;
}

interface Governor {
  name: string;
  party: string;
  since: string;
  imageUrl?: string;
  socialLinks?: SocialLink[];
}

interface Senator {
  name: string;
  party: string;
  since: string;
  class?: number;
  imageUrl?: string;
  socialLinks?: SocialLink[];
}

interface Representative {
  name: string;
  party: string;
  district: number;
  since: string;
  imageUrl?: string;
  socialLinks?: SocialLink[];
}

interface State {
  name: string;
  capital: string;
  largestCity: string;
  statehood: string;
  nickname: string;
  population: number;
  electoralVotes: number;
  representativesCount: number;
  governor: Governor;
  senators: Senator[];
  representatives: Representative[];
}

interface StateData {
  [key: string]: State;
}

const prisma = new PrismaClient();

// Read the state data file
const stateDataPath = path.join(__dirname, '../src/lib/data/stateData.json');
const stateData = JSON.parse(fs.readFileSync(stateDataPath, 'utf-8')) as StateData;

async function main() {
  console.log('Starting seed...');

  for (const [stateCode, state] of Object.entries(stateData)) {
    console.log(`Processing state: ${state.name}`);

    try {
      // Create governor first
      const governor = await prisma.governor.create({
        data: {
          name: state.governor.name,
          party: state.governor.party,
          since: state.governor.since,
          imageUrl: state.governor.imageUrl,
          lastVerified: new Date(),
          socialLinks: {
            create: state.governor.socialLinks?.map(link => ({
              platform: link.platform,
              url: link.url
            })) || []
          }
        }
      });

      // Create state with governor reference
      const createdState = await prisma.state.create({
        data: {
          id: stateCode,
          name: state.name,
          capital: state.capital,
          largestCity: state.largestCity,
          statehood: state.statehood,
          nickname: state.nickname,
          population: state.population,
          electoralVotes: state.electoralVotes,
          representativesCount: state.representativesCount,
          governorId: governor.id,
          lastVerified: new Date()
        }
      });

      // Create senators
      for (const senator of state.senators) {
        await prisma.senator.create({
          data: {
            name: senator.name,
            party: senator.party,
            since: senator.since,
            class: senator.class || 1,
            imageUrl: senator.imageUrl,
            stateId: createdState.id,
            lastVerified: new Date(),
            socialLinks: {
              create: senator.socialLinks?.map(link => ({
                platform: link.platform,
                url: link.url
              })) || []
            }
          }
        });
      }

      // Create representatives
      for (const rep of state.representatives) {
        await prisma.representative.create({
          data: {
            name: rep.name,
            party: rep.party,
            district: rep.district,
            since: rep.since,
            imageUrl: rep.imageUrl,
            stateId: createdState.id,
            lastVerified: new Date(),
            socialLinks: {
              create: rep.socialLinks?.map(link => ({
                platform: link.platform,
                url: link.url
              })) || []
            }
          }
        });
      }

      console.log(`✓ Completed processing ${state.name}`);
    } catch (error) {
      console.error(`Error processing ${state.name}:`, error);
    }
  }

  console.log('Seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 