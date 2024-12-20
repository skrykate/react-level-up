import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

import type { FC } from 'react';

interface GrandChildComponentProps {
    data: string;
}

const GrandChildComponent: FC<GrandChildComponentProps> = ({ data }) => {
    console.log('GrandChildComponent --- Render');

    return (
        <Layer
            title="GrandChild"
            colored
        >
            <Text>Hello, {data}!</Text>
        </Layer>
    );
};

export default GrandChildComponent;
