import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseAnimatedContainer = dynamic(() => import('./CaseAnimatedContainer'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseAnimatedContainer };
