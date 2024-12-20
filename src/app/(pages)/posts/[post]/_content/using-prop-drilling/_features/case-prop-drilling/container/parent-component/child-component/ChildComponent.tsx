import { Layer } from '@/components/ui-examples/layer';

import { GrandChildComponent } from './grand-child-component';

import type { FC } from 'react';

interface ChildComponentProps {
    data: string;
}

const ChildComponent: FC<ChildComponentProps> = ({ data }) => {
    return (
        <Layer
            colored
            title="Child"
        >
            <GrandChildComponent data={data} />
        </Layer>
    );
};

export default ChildComponent;
