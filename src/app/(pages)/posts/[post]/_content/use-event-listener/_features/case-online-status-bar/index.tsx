import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseOnlineStatusBar = dynamic(() => import('./CaseOnlineStatusBar'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseOnlineStatusBar };
