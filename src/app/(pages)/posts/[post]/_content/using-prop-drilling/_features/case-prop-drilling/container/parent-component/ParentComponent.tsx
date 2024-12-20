import { Layer } from '@/components/ui-examples/layer';

import { ChildComponent } from './child-component';

import type { FC } from 'react';

interface ParentComponentProps {
    data: string;
}

const ParentComponent: FC<ParentComponentProps> = ({ data }) => {
    return (
        <Layer
            title="Parent"
            colored
        >
            <ChildComponent data={data} />
        </Layer>
    );
};

export default ParentComponent;
