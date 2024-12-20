import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseModal = dynamic(() => import('./CaseModal'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseModal };
