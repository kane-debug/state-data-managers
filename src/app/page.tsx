import Link from "next/link";
import { stateData } from "@/lib/data/stateData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black dark:bg-black border-b border-border/40 dark:border-border/80">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/40 dark:to-primary/30" />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-6 text-white">
            PolitiConnect
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto px-4">
            Redefining Political Engagement
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Federal Government Section */}
        <section className="py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* President Card */}
            <Link href="/president" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/40 dark:to-primary/30 border border-border/40 dark:border-border/80 hover:border-primary/40 dark:hover:border-primary/80 transition-colors shadow-lg dark:shadow-2xl dark:shadow-primary/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-bold mb-4 text-card-foreground">Executive Branch</h3>
                  <p className="text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-card-foreground/90">
                    Experience the power of the presidency.
                  </p>
                </div>
              </div>
            </Link>

            {/* House Card */}
            <Link href="/house" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-destructive/20 to-destructive/10 dark:from-destructive/40 dark:to-destructive/30 border border-border/40 dark:border-border/80 hover:border-destructive/40 dark:hover:border-destructive/80 transition-colors shadow-lg dark:shadow-2xl dark:shadow-destructive/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-bold mb-4 text-card-foreground">House</h3>
                  <p className="text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-card-foreground/90">
                    Where democracy meets representation.
                  </p>
                </div>
              </div>
            </Link>

            {/* Senate Card */}
            <Link href="/senate" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/10 dark:from-secondary/40 dark:to-secondary/30 border border-border/40 dark:border-border/80 hover:border-secondary/40 dark:hover:border-secondary/80 transition-colors shadow-lg dark:shadow-2xl dark:shadow-secondary/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-bold mb-4 text-card-foreground">Senate</h3>
                  <p className="text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-card-foreground/90">
                    The heart of legislative power.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* States Section */}
        <section className="py-32 border-t border-border/40 dark:border-border/80">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold mb-6">50 States</h2>
            <p className="text-2xl font-light text-muted-foreground">One Nation, Infinite Possibilities</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Object.entries(stateData).map(([code, state]) => (
              <Link 
                key={code} 
                href={`/state/${code}`}
                className="group relative overflow-hidden rounded-xl bg-card hover:bg-card/80 dark:bg-card/20 dark:hover:bg-card/30 transition-all duration-300 border border-border/40 dark:border-border/80 hover:border-primary/40 dark:hover:border-primary/80 shadow-md hover:shadow-lg dark:shadow-2xl dark:shadow-primary/20 cursor-pointer"
              >
                <div className="aspect-square flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-3xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">{code}</span>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary/80 transition-colors">{state.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-32 border-t border-border/40 dark:border-border/80">
          <h2 className="text-6xl font-bold text-center mb-24">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-video rounded-3xl overflow-hidden relative mb-8 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/40 dark:to-primary/30 border border-border/40 dark:border-border/80 hover:border-primary/40 dark:hover:border-primary/80 transition-colors shadow-lg dark:shadow-2xl dark:shadow-primary/20">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Legislative Updates</h3>
              <p className="text-xl font-light text-muted-foreground">Real-time tracking of congressional activities.</p>
            </div>
            <div className="group">
              <div className="aspect-video rounded-3xl overflow-hidden relative mb-8 bg-gradient-to-br from-destructive/20 to-destructive/10 dark:from-destructive/40 dark:to-destructive/30 border border-border/40 dark:border-border/80 hover:border-destructive/40 dark:hover:border-destructive/80 transition-colors shadow-lg dark:shadow-2xl dark:shadow-destructive/20">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Executive Actions</h3>
              <p className="text-xl font-light text-muted-foreground">Presidential orders and policy changes.</p>
            </div>
            <div className="group">
              <div className="aspect-video rounded-3xl overflow-hidden relative mb-8 bg-gradient-to-br from-secondary/20 to-secondary/10 dark:from-secondary/40 dark:to-secondary/30 border border-border/40 dark:border-border/80 hover:border-secondary/40 dark:hover:border-secondary/80 transition-colors shadow-lg dark:shadow-2xl dark:shadow-secondary/20">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4">State Elections</h3>
              <p className="text-xl font-light text-muted-foreground">Upcoming electoral events nationwide.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
