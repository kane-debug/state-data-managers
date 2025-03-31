import { fetchCurrentCongress, transformCongressData } from '../congress-api';
import type { State } from '../types/state';
import fs from 'fs/promises';
import path from 'path';

export async function updateStateRepresentatives() {
  try {
    // Fetch current congress data
    const congressMembers = await fetchCurrentCongress();
    const updates = transformCongressData(congressMembers);

    // Read current state data
    const stateDataPath = path.join(process.cwd(), 'src', 'lib', 'data', 'stateData.ts');
    const currentData = await import('../data/stateData');
    const stateData = { ...currentData.stateData };

    // Update representatives and senators for each state
    for (const update of updates) {
      const { state: stateCode, entityType, data } = update;
      
      if (!stateData[stateCode]) continue;

      const fullName = `${data.firstName} ${data.lastName}`;
      const socialLinks = [
        ...(data.website ? [{ platform: 'website' as const, url: data.website }] : []),
        ...(data.twitter ? [{ platform: 'twitter' as const, url: `https://twitter.com/${data.twitter}` }] : []),
        ...(data.facebook ? [{ platform: 'facebook' as const, url: `https://facebook.com/${data.facebook}` }] : []),
      ];

      if (entityType === 'senator') {
        const senatorIndex = stateData[stateCode].senators.findIndex(
          s => s.name.toLowerCase().includes(data.lastName.toLowerCase())
        );
        
        if (senatorIndex >= 0) {
          stateData[stateCode].senators[senatorIndex] = {
            ...stateData[stateCode].senators[senatorIndex],
            name: fullName,
            party: data.party === 'D' ? 'D' : data.party === 'R' ? 'R' : 'I',
            socialLinks
          };
        }
      } else {
        const repIndex = stateData[stateCode].representatives.findIndex(
          r => r.name.toLowerCase().includes(data.lastName.toLowerCase())
        );

        if (repIndex >= 0) {
          stateData[stateCode].representatives[repIndex] = {
            ...stateData[stateCode].representatives[repIndex],
            name: fullName,
            party: data.party === 'D' ? 'D' : data.party === 'R' ? 'R' : 'I',
            socialLinks
          };
        }
      }
    }

    // Generate the new file content
    const fileContent = `import type { StateData } from '../types/state';

export const stateData: StateData = ${JSON.stringify(stateData, null, 2)};`;

    // Write the updated data back to the file
    await fs.writeFile(stateDataPath, fileContent, 'utf-8');
    
    console.log('State data successfully updated!');
    return true;
  } catch (error) {
    console.error('Error updating state data:', error);
    return false;
  }
} 