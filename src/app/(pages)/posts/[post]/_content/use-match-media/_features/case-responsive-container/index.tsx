import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseResponsiveContainer = dynamic(
    () => import('./CaseResponsiveContainer'),
    {
        ssr: false,
        loading: () => {
            return <Loader />;
        },
    }
);

export { CaseResponsiveContainer };
