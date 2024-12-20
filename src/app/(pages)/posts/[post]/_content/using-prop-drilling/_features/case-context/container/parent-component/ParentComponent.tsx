import { Layer } from '@/components/ui-examples/layer';

import { ChildComponent } from './child-component';

import type { FC } from 'react';

const ParentComponent: FC = () => {
    return (
        <Layer
            title="Parent"
            colored
        >
            <ChildComponent />
        </Layer>
    );
};

export default ParentComponent;
