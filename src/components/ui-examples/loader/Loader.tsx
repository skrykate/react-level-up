import { Cat as Icon } from 'lucide-react';

import type { FC } from 'react';

const Loader: FC = () => {
    return (
        <div className="relative m-20 flex h-10 w-10 items-center justify-center after:absolute after:bottom-0 after:h-1 after:w-full after:rounded-full after:bg-blue-500">
            <Icon className="h-8 w-8 animate-bounce stroke-blue-500" />
        </div>
    );
};

Loader.displayName = 'Example.Loader';

export default Loader;
