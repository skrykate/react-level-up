import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseContext = dynamic(() => import('./CaseContext'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseContext };
