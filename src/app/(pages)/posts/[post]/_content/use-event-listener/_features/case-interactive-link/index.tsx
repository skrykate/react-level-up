import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseInteractiveLink = dynamic(() => import('./CaseInteractiveLink'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseInteractiveLink };
