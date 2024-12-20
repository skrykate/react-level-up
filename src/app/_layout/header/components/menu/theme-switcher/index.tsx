import dynamic from 'next/dynamic';

import { Skeleton } from '@/components/ui/skeleton';

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
    ssr: false,
    loading: () => {
        return <Skeleton className="h-12 w-24 rounded-full" />;
    },
});

export { ThemeSwitcher };
