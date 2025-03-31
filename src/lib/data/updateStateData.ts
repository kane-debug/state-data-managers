import type { State } from '../types/state';
import { stateData } from './stateData';
import {
  northeastUpdates,
  southeastUpdates,
  midwestUpdates,
  southwestUpdates,
  westUpdates,
  mergeStateData
} from './stateDataUpdates';

// Merge all regional updates with the existing state data
export function updateAllStateData(): Record<string, State> {
  // Create a new object with the correct types
  const typedStateData: Record<string, State> = stateData;
  let updatedData = { ...typedStateData };
  
  // Apply updates region by region
  updatedData = mergeStateData(updatedData, northeastUpdates);
  updatedData = mergeStateData(updatedData, southeastUpdates);
  updatedData = mergeStateData(updatedData, midwestUpdates);
  updatedData = mergeStateData(updatedData, southwestUpdates);
  updatedData = mergeStateData(updatedData, westUpdates);
  
  return updatedData;
}

// Export the updated state data
export const updatedStateData = updateAllStateData(); 