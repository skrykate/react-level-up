import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseUserEmailList = dynamic(() => import('./CaseUserEmailList'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseUserEmailList };
