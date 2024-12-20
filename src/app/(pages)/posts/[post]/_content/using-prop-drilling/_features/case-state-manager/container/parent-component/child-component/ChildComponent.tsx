import { Layer } from '@/components/ui-examples/layer';

import { GrandChildComponent } from './grand-child-component';

import type { FC } from 'react';

const ChildComponent: FC = () => {
    return (
        <Layer
            colored
            title="Child"
        >
            <GrandChildComponent />
        </Layer>
    );
};

export default ChildComponent;
