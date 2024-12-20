import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseAnalyticData = dynamic(() => import('./CaseAnalyticData'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseAnalyticData };
