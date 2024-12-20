import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseRandomColors = dynamic(() => import('./CaseRandomColors'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseRandomColors };
