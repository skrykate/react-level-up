import { Loader as Icon } from 'lucide-react';

import type { FC } from 'react';

const Loader: FC = () => {
    return <Icon className="m-20 h-8 w-8 animate-spin stroke-brand" />;
};

export default Loader;
