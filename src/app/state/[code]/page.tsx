import Image from 'next/image';
import { stateData } from '@/lib/data/stateData';
import { notFound } from "next/navigation";
import { FaTwitter, FaFacebook, FaGlobe } from 'react-icons/fa';
import type { State } from '@/lib/types/state';
import Link from 'next/link';

interface StatePageProps {
  params: {
    code: string;
  };
}

export default function StatePage({ params }: StatePageProps) {
  const stateCode = params.code.toUpperCase();
  const stateInfo = stateData[stateCode] as State;
  
  if (!stateInfo) {
    notFound();
  }

  const getFullPartyName = (party: 'D' | 'R' | 'I') => {
    switch (party) {
      case 'D':
        return 'Democrat';
      case 'R':
        return 'Republican';
      case 'I':
        return 'Independent';
      default:
        return party;
    }
  };

  const gradientColors = stateInfo.governor.party === "R" 
    ? "from-red-700 to-red-500" 
    : "from-blue-700 to-blue-500";

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border/40 dark:border-border/80">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">{stateInfo.name}</h1>
          <p className="text-2xl text-muted-foreground">Capital: {stateInfo.capital}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* State Header */}
        <section className="mb-16">
          <div className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-4">State Information</h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <p className="text-muted-foreground">Capital: {stateInfo.capital}</p>
                  <p className="text-muted-foreground">Largest City: {stateInfo.largestCity}</p>
                  <p className="text-muted-foreground">Statehood: {stateInfo.statehood}</p>
                  <p className="text-muted-foreground">Nickname: {stateInfo.nickname}</p>
                  <p className="text-muted-foreground">Population: {stateInfo.population.toLocaleString()}</p>
                  <p className="text-muted-foreground">Electoral Votes: {stateInfo.electoralVotes}</p>
                  <p className="text-muted-foreground">Representatives: {stateInfo.representativesCount}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governor Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Governor</h2>
          <div className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
            <div className="flex gap-8">
              <div className="w-48 h-48 relative rounded-xl overflow-hidden bg-muted">
                {stateInfo.governor.imageUrl ? (
                  <Image
                    src={stateInfo.governor.imageUrl}
                    alt={`Photo of ${stateInfo.governor.name}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Photo Placeholder
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{stateInfo.governor.name}</h3>
                <p className="text-lg text-muted-foreground">
                  Party: {getFullPartyName(stateInfo.governor.party)}
                </p>
                <p className="text-muted-foreground mt-2">Since: {stateInfo.governor.since}</p>
                <div className="mt-4 flex gap-4">
                  {stateInfo.governor.socialLinks?.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.platform === 'website' && <FaGlobe />}
                      {link.platform === 'twitter' && <FaTwitter />}
                      {link.platform === 'facebook' && <FaFacebook />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Senators Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">U.S. Senators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stateInfo.senators.map((senator) => (
              <div
                key={senator.name}
                className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl"
              >
                <div className="flex gap-6">
                  <div className="w-40 h-40 relative rounded-xl overflow-hidden bg-muted">
                    {senator.imageUrl ? (
                      <Image
                        src={senator.imageUrl}
                        alt={`Photo of ${senator.name}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        Photo Placeholder
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{senator.name}</h3>
                    <p className="text-lg text-muted-foreground">
                      Party: {getFullPartyName(senator.party)}
                    </p>
                    <p className="text-muted-foreground mt-2">Since: {senator.since}</p>
                    {senator.class && (
                      <p className="text-muted-foreground">Class {senator.class}</p>
                    )}
                    <div className="mt-4 flex gap-4">
                      {senator.socialLinks?.map((link) => (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.platform === 'website' && <FaGlobe />}
                          {link.platform === 'twitter' && <FaTwitter />}
                          {link.platform === 'facebook' && <FaFacebook />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Representatives Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8">U.S. Representatives</h2>
          <div className="mb-4">
            <p className="text-lg text-muted-foreground">
              {stateInfo.name} has {stateInfo.representativesCount} {stateInfo.representativesCount === 1 ? 'Representative' : 'Representatives'} in Congress
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateInfo.representatives.map((rep) => (
              <div
                key={rep.name}
                className="bg-card hover:bg-card/80 border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-40 h-40 relative rounded-xl overflow-hidden bg-muted mx-auto">
                    {rep.imageUrl ? (
                      <Image
                        src={rep.imageUrl}
                        alt={`Photo of ${rep.name}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        Photo Placeholder
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{rep.name}</h3>
                    <div className={`px-4 py-1 rounded-full text-white inline-flex items-center mx-auto mb-2
                      ${rep.party === 'R' ? 'bg-red-600' : rep.party === 'D' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                      {getFullPartyName(rep.party)}
                    </div>
                    <p className="text-lg font-medium mb-1">District {rep.district}</p>
                    <p className="text-muted-foreground mb-4">Since: {rep.since}</p>
                    <div className="flex gap-4 justify-center">
                      {rep.socialLinks?.map((link) => (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.platform === 'website' && <FaGlobe />}
                          {link.platform === 'twitter' && <FaTwitter />}
                          {link.platform === 'facebook' && <FaFacebook />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 