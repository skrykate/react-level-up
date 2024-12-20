import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseUseCallback = dynamic(() => import('./CaseUseCallback'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseUseCallback };
