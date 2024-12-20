import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseAutoCompletePartial = dynamic(
    () => import('./CaseAutoCompletePartial'),
    {
        ssr: false,
        loading: () => {
            return <Loader />;
        },
    }
);

export { CaseAutoCompletePartial };
