import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseAutoCompleteGood = dynamic(() => import('./CaseAutoCompleteGood'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseAutoCompleteGood };
