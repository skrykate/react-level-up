import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseTodoList = dynamic(() => import('./CaseTodoList'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseTodoList };
