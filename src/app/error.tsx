'use client';

import { Button } from '@/components/ui/button';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ reset: handleClick }: ErrorProps) {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center space-y-4 overflow-hidden text-center">
            <h1 className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-monoBrand text-[10rem] font-bold text-neutral-200 dark:text-neutral-800">
                Some error...
            </h1>
            <p className="z-30 text-neutral-500">Something went wrong!</p>
            <Button
                className="z-30"
                onClick={handleClick}
            >
                Try again? 🛠️
            </Button>
        </div>
    );
}
