import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseUserPreferences = dynamic(() => import('./CaseUserPreferences'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseUserPreferences };
