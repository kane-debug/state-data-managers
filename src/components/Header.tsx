'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/contexts/ThemeContext';
import { useRouter } from 'next/navigation';

// Mock search data - replace with real data later
const searchSuggestions = {
  president: ['President Biden', 'Executive Orders', 'Cabinet Members'],
  house: ['Speaker Johnson', 'House Leadership', 'House Committees'],
  senate: ['Senate Leadership', 'Senate Committees', 'Current Bills'],
  states: ['California', 'Texas', 'New York', 'Florida']
};

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Filter suggestions based on search query
    if (searchQuery) {
      const allSuggestions = Object.values(searchSuggestions).flat();
      const filtered = allSuggestions.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    // Implement your search logic here
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-[hsl(var(--border))]">
      <div className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
            >
              PolitiConnect
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/president"
                className="text-card-foreground hover:text-primary transition-colors font-medium"
              >
                President
              </Link>
              <Link
                href="/house"
                className="text-card-foreground hover:text-primary transition-colors font-medium"
              >
                House
              </Link>
              <Link
                href="/senate"
                className="text-card-foreground hover:text-primary transition-colors font-medium"
              >
                Senate
              </Link>
              <Link
                href="/state/CA"
                className="text-card-foreground hover:text-primary transition-colors font-medium"
              >
                States
              </Link>
            </nav>
          </div>

          {/* Search and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-xl bg-card border border-[hsl(var(--border))] focus:outline-none focus:ring-2 focus:ring-primary/50 text-card-foreground"
                />
                <button
                  onClick={() => handleSearch(searchQuery)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Search Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute mt-2 w-full bg-card rounded-xl border border-[hsl(var(--border))] shadow-lg overflow-hidden">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleSearch(suggestion);
                        setSearchQuery(suggestion);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-muted transition-colors text-card-foreground"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-card hover:bg-muted transition-all duration-300 border border-[hsl(var(--border))] group relative"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                {/* Sun Icon */}
                <svg
                  className={`w-5 h-5 absolute transition-transform duration-300 ${
                    isDarkMode ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {/* Moon Icon */}
                <svg
                  className={`w-5 h-5 absolute transition-transform duration-300 ${
                    isDarkMode ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 