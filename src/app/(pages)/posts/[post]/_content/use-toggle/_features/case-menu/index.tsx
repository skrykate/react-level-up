import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseMenu = dynamic(() => import('./CaseMenu'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseMenu };
