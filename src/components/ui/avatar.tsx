import { cn } from '@/lib/utils';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
}

export function Avatar({ className, src, alt = '' }: AvatarProps) {
  return (
    <div className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-100">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      )}
    </div>
  );
} 