import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseQuiz = dynamic(() => import('./CaseQuiz'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseQuiz };
