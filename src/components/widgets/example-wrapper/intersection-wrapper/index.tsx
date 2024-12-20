import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const IntersectionWrapper = dynamic(() => import('./IntersectionWrapper'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { IntersectionWrapper };
