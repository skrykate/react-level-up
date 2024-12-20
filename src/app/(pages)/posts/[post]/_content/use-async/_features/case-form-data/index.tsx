import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseFormData = dynamic(() => import('./CaseFormData'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseFormData };
