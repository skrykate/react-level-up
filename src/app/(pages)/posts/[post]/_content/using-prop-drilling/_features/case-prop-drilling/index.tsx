import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CasePropDrilling = dynamic(() => import('./CasePropDrilling'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CasePropDrilling };
