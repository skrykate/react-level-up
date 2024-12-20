import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CasePersonBio = dynamic(() => import('./CasePersonBio'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CasePersonBio };
