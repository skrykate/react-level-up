import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseNewsGrid = dynamic(() => import('./CaseNewsGrid'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseNewsGrid };
