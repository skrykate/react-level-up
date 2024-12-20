import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseRandomValue = dynamic(() => import('./CaseRandomValue'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseRandomValue };
