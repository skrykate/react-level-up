import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseGallery = dynamic(() => import('./CaseGallery'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseGallery };
