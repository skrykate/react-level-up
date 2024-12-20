import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseTermCard = dynamic(() => import('./CaseTermCard'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseTermCard };
