import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseStateManager = dynamic(() => import('./CaseStateManager'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseStateManager };
