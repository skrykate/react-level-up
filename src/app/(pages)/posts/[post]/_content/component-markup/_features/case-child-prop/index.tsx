import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseChildProp = dynamic(() => import('./CaseChildProp'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseChildProp };
