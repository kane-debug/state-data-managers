import { useState, useEffect } from 'react';
import { Bill } from '@/lib/services/billService';
import { billScraperService } from '@/lib/services/billScraperService';

interface UseBillsOptions {
  state?: string;
  autoRefresh?: boolean;
  refreshInterval?: number;
  useRealTimeData?: boolean;
}

interface UseBillsResult {
  bills: Bill[];
  loading: boolean;
  error: Error | null;
  refreshBills: () => Promise<void>;
}

export function useBills({ 
  state, 
  autoRefresh = false, 
  refreshInterval = 300000, // 5 minutes
  useRealTimeData = true // Default to using real-time data
}: UseBillsOptions = {}): UseBillsResult {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchBills = async () => {
    try {
      setLoading(true);
      let response;
      
      if (useRealTimeData) {
        // Try to fetch real-time data first
        try {
          response = await fetch(`/api/bills/scrape${state ? `?state=${state}` : ''}`);
          if (!response.ok) {
            throw new Error('Failed to fetch real-time bills');
          }
        } catch (err) {
          console.warn('Failed to fetch real-time data, falling back to stored data:', err);
          // Fall back to stored data if real-time fetch fails
          response = await fetch(`/api/bills${state ? `?state=${state}` : ''}`);
          if (!response.ok) {
            throw new Error('Failed to fetch bills');
          }
        }
      } else {
        // Use stored data directly
        response = await fetch(`/api/bills${state ? `?state=${state}` : ''}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bills');
        }
      }
      
      const data = await response.json();
      setBills(data.bills);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBills();

    if (autoRefresh) {
      const interval = setInterval(fetchBills, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [state, autoRefresh, refreshInterval, useRealTimeData]);

  return {
    bills,
    loading,
    error,
    refreshBills: fetchBills
  };
} 