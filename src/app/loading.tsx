import { Loader } from '@/components/ui/loader';

import type { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className="relative flex h-full w-full items-center justify-center">
            <Loader />
        </div>
    );
};

export default Loading;
