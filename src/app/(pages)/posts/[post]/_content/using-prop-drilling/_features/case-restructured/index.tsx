import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseRestructured = dynamic(() => import('./CaseRestructured'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseRestructured };
