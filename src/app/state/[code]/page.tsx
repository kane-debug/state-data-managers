'use client';

import { useState } from 'react';
import Image from 'next/image';
import { stateData } from '@/lib/stateData';
import { PartyBadge } from '@/components/PartyBadge';
import { SocialLinks } from '@/components/SocialLinks';
import type { StateData } from '@/lib/types/state';
import { notFound } from "next/navigation";

interface StatePageProps {
  params: {
    code: string;
  };
}

export default function StatePage({ params }: StatePageProps) {
  const stateCode = params.code.toUpperCase();
  const state = stateData[stateCode];
  const [searchTerm, setSearchTerm] = useState('');
  
  if (!state) {
    notFound();
  }

  const gradientColors = state.governor.party === "R" 
    ? "from-red-700 to-red-500" 
    : "from-blue-700 to-blue-500";

  const filteredRepresentatives = state.representatives?.filter(rep =>
    rep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rep.district.toString().includes(searchTerm) ||
    rep.party.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border/40 dark:border-border/80">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">{state.name}</h1>
          <p className="text-2xl text-muted-foreground">Capital: {state.capital}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* State Header */}
        <section className="mb-16">
          <div className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Key Statistics</h2>
                {state.population && (
                  <p className="text-muted-foreground">Population: {state.population.toLocaleString()}</p>
                )}
                {state.largestCity && (
                  <p className="text-muted-foreground">Largest City: {state.largestCity}</p>
                )}
                {state.statehood && (
                  <p className="text-muted-foreground">Statehood: {state.statehood}</p>
                )}
                {state.nickname && (
                  <p className="text-muted-foreground">Nickname: {state.nickname}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Governor Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Governor</h2>
          <div className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{state.governor.name}</h3>
                <p className="text-lg text-muted-foreground">
                  Party: {state.governor.party}
                </p>
                <p className="text-muted-foreground mt-2">Term ends: {state.governor.termEnds}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Senators Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">U.S. Senators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {state.senators.map((senator) => (
              <div
                key={senator.name}
                className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-2">{senator.name}</h3>
                <p className="text-lg text-muted-foreground">
                  Party: {senator.party}
                </p>
                <p className="text-muted-foreground mt-2">Class {senator.class}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Representatives Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8">U.S. Representatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.representatives.map((rep) => (
              <div
                key={rep.name}
                className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-2">{rep.name}</h3>
                <p className="text-lg text-muted-foreground">
                  Party: {rep.party}
                </p>
                <p className="text-muted-foreground mt-2">District {rep.district}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 