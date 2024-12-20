import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseTwoUsers = dynamic(() => import('./CaseTwoUsers'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseTwoUsers };
