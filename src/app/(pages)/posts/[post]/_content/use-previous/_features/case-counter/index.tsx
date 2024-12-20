import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseCounter = dynamic(() => import('./CaseCounter'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseCounter };
