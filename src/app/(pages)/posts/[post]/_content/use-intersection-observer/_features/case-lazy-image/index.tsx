import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseLazyImage = dynamic(() => import('./CaseLazyImage'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseLazyImage };
