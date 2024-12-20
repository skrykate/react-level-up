import dynamic from 'next/dynamic';

import { Loader } from '@/components/ui/loader';

const CaseHamburgerMenu = dynamic(() => import('./CaseHamburgerMenu'), {
    ssr: false,
    loading: () => {
        return <Loader />;
    },
});

export { CaseHamburgerMenu };
