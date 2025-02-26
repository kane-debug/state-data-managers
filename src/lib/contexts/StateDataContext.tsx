"use client";

import { createContext, useContext, useState } from 'react';
import { StateData } from '@/lib/types/politicians';

interface StateDataContextType {
  stateData: Record<string, StateData>;
  isLoading: boolean;
  error: Error | null;
  updateState: (stateAbbr: string, data: Partial<StateData>) => Promise<void>;
}

const StateDataContext = createContext<StateDataContextType | undefined>(undefined);

export function StateDataProvider({ children }: { children: React.ReactNode }) {
  const [stateData, setStateData] = useState<Record<string, StateData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateState = async (stateAbbr: string, data: Partial<StateData>) => {
    try {
      setStateData(prev => ({
        ...prev,
        [stateAbbr]: {
          ...(prev[stateAbbr] || {}),
          ...data,
          lastUpdated: new Date().toISOString()
        } as StateData
      }));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update state data'));
      throw err;
    }
  };

  return (
    <StateDataContext.Provider value={{ stateData, isLoading, error, updateState }}>
      {children}
    </StateDataContext.Provider>
  );
}

export function useStateData() {
  const context = useContext(StateDataContext);
  if (context === undefined) {
    throw new Error('useStateData must be used within a StateDataProvider');
  }
  return context;
} 