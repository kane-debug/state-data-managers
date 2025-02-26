import { stateGovernors, PartyAffiliation } from '../data/statePartyData';
import { useTheme } from '@/lib/contexts/ThemeContext';

interface PartyStyles {
  bgColor: string;
  textColor: string;
  borderColor: string;
  hoverBg: string;
  lightBg: string;
  darkBg: string;
}

export function usePartyStyles(stateCode?: string) {
  const { isDarkMode } = useTheme();
  
  const getPartyStyles = (party: PartyAffiliation): PartyStyles => {
    if (party === 'Republican') {
      return {
        bgColor: isDarkMode ? 'bg-red-900' : 'bg-red-600',
        textColor: 'text-white',
        borderColor: isDarkMode ? 'border-red-800' : 'border-red-500',
        hoverBg: isDarkMode ? 'hover:bg-red-800' : 'hover:bg-red-700',
        lightBg: 'bg-red-50',
        darkBg: 'bg-red-900/20'
      };
    } else {
      return {
        bgColor: isDarkMode ? 'bg-blue-900' : 'bg-blue-600',
        textColor: 'text-white',
        borderColor: isDarkMode ? 'border-blue-800' : 'border-blue-500',
        hoverBg: isDarkMode ? 'hover:bg-blue-800' : 'hover:bg-blue-700',
        lightBg: 'bg-blue-50',
        darkBg: 'bg-blue-900/20'
      };
    }
  };

  if (!stateCode) {
    return getPartyStyles('Republican'); // Default for president's page
  }

  const stateData = stateGovernors[stateCode.toLowerCase()];
  return getPartyStyles(stateData?.party || 'Republican');
} 