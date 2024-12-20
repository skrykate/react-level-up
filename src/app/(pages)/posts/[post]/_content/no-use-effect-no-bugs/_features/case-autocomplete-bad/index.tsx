import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseAutoCompleteBad = dynamic(() => import('./CaseAutoCompleteBad'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseAutoCompleteBad };
