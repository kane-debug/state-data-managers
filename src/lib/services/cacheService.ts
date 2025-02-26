import { Post } from '@/lib/types';

class CacheService {
  private cache: Map<string, { data: Post[]; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  set(key: string, data: Post[]) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): Post[] | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.CACHE_DURATION;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  clear() {
    this.cache.clear();
  }

  getLastUpdateTime(): Date | null {
    const cached = this.cache.get('presidential-updates');
    return cached ? new Date(cached.timestamp) : null;
  }
}

export const cacheService = new CacheService(); 