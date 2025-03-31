export default function StateLoading() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border/40 dark:border-border/80">
        <div className="container mx-auto px-4">
          <div className="h-16 w-96 bg-muted animate-pulse rounded-lg mb-4"></div>
          <div className="h-8 w-64 bg-muted animate-pulse rounded-lg"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* State Header */}
        <section className="mb-16">
          <div className="bg-card border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
            <div className="h-8 w-48 bg-muted animate-pulse rounded-lg mb-4"></div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-6 w-32 bg-muted animate-pulse rounded-lg"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Governor Section */}
        <section className="mb-16">
          <div className="h-12 w-64 bg-muted animate-pulse rounded-lg mb-8"></div>
          <div className="bg-card border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
            <div className="flex gap-8">
              <div className="w-48 h-48 bg-muted animate-pulse rounded-xl"></div>
              <div className="flex-1 space-y-4">
                <div className="h-8 w-64 bg-muted animate-pulse rounded-lg"></div>
                <div className="h-6 w-32 bg-muted animate-pulse rounded-lg"></div>
                <div className="h-6 w-24 bg-muted animate-pulse rounded-lg"></div>
                <div className="flex gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-muted animate-pulse rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Senators Section */}
        <section className="mb-16">
          <div className="h-12 w-64 bg-muted animate-pulse rounded-lg mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-card border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
                <div className="flex gap-6">
                  <div className="w-40 h-40 bg-muted animate-pulse rounded-xl"></div>
                  <div className="flex-1 space-y-4">
                    <div className="h-8 w-48 bg-muted animate-pulse rounded-lg"></div>
                    <div className="h-6 w-32 bg-muted animate-pulse rounded-lg"></div>
                    <div className="h-6 w-24 bg-muted animate-pulse rounded-lg"></div>
                    <div className="flex gap-4">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-8 h-8 bg-muted animate-pulse rounded-full"></div>
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
          <div className="h-12 w-64 bg-muted animate-pulse rounded-lg mb-8"></div>
          <div className="h-6 w-48 bg-muted animate-pulse rounded-lg mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card border border-border/40 dark:border-border/80 rounded-3xl p-8 shadow-lg dark:shadow-2xl">
                <div className="flex flex-col gap-6">
                  <div className="w-40 h-40 bg-muted animate-pulse rounded-xl mx-auto"></div>
                  <div className="space-y-4">
                    <div className="h-8 w-48 bg-muted animate-pulse rounded-lg mx-auto"></div>
                    <div className="h-6 w-24 bg-muted animate-pulse rounded-full mx-auto"></div>
                    <div className="h-6 w-32 bg-muted animate-pulse rounded-lg mx-auto"></div>
                    <div className="h-6 w-24 bg-muted animate-pulse rounded-lg mx-auto"></div>
                    <div className="flex gap-4 justify-center">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-8 h-8 bg-muted animate-pulse rounded-full"></div>
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