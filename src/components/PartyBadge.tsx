type PartyBadgeProps = {
  party: 'Republican' | 'Democrat' | 'Independent';
};

export function PartyBadge({ party }: PartyBadgeProps) {
  const colors = {
    Republican: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    Democrat: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    Independent: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[party]}`}>
      {party}
    </span>
  );
} 