import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseNotes = dynamic(() => import('./CaseNotes'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseNotes };
