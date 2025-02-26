import { useBills } from '@/lib/hooks/useBills';
import { Bill } from '@/lib/services/billService';
import { useState } from 'react';

interface StateBillsProps {
  state: string;
}

export default function StateBills({ state }: StateBillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { bills, loading, error, refreshBills } = useBills({ 
    state,
    autoRefresh: true,
    refreshInterval: 300000 // 5 minutes
  });

  const categories = ['all', ...Array.from(new Set(bills.map(bill => bill.category)))];
  const filteredBills = selectedCategory === 'all' 
    ? bills 
    : bills.filter(bill => bill.category === selectedCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error loading bills. Please try again later.
        <button 
          onClick={() => refreshBills()}
          className="ml-2 text-primary hover:underline"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <label htmlFor="category" className="font-medium">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredBills.map((bill: Bill) => (
          <div 
            key={bill.id} 
            className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">{bill.title}</h3>
            <p className="text-gray-600 mb-4">{bill.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 rounded-full text-sm bg-primary/10 text-primary">
                {bill.category}
              </span>
              <span className="px-2 py-1 rounded-full text-sm bg-gray-100">
                {bill.status}
              </span>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>Last Action: {bill.lastAction}</p>
              <p>Updated: {new Date(bill.lastUpdated).toLocaleDateString()}</p>
            </div>
            
            <a 
              href={bill.source}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary hover:underline"
            >
              View Source →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 