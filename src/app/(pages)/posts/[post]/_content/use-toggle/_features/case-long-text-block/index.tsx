import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseLongTextBlock = dynamic(() => import('./CaseLongText'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseLongTextBlock };
