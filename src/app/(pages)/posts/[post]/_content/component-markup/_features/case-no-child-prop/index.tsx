import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseNoChildProp = dynamic(() => import('./CaseNoChildProp'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseNoChildProp };
