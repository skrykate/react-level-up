import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

import { useDataStore } from '@/stores/data-store';

import type { FC } from 'react';

const GrandChildComponent: FC = () => {
    const data = useDataStore((state) => state.data);

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
