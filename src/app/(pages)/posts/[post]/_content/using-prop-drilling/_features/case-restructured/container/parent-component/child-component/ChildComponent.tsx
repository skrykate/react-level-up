import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

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
            <Text>{data}</Text>
        </Layer>
    );
};

export default ChildComponent;
