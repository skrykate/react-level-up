import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseResponsiveMenu = dynamic(() => import('./CaseResponsiveMenu'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseResponsiveMenu };
