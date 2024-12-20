import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

import { useDataContext } from '@/context/data';

import type { FC } from 'react';

const GrandChildComponent: FC = () => {
    const data = useDataContext();

    return (
        <Layer
            title="GrandChild"
            colored
        >
            <Text>{data}</Text>
        </Layer>
    );
};

export default GrandChildComponent;
