import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseAutoCompleteInitial = dynamic(
    () => import('./CaseAutoCompleteInitial'),
    {
        ssr: false,
        loading: () => {
            return <Loader />;
        },
    }
);

export { CaseAutoCompleteInitial };
