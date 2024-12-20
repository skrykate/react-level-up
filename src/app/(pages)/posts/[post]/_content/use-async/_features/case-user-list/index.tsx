import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseUserList = dynamic(() => import('./CaseUserList'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseUserList };
