import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseUseMemo = dynamic(() => import('./CaseUseMemo'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseUseMemo };
