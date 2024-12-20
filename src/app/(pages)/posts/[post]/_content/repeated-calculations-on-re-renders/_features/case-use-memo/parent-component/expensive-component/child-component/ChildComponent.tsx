import { Layer } from '@/components/ui-examples/layer';
import { Text } from '@/components/ui-typography-examples/text';

import type { FC } from 'react';

const textContent = 'Some additional content 😻';

const ChildComponent: FC = () => {
    return (
        <Layer
            title="Child"
            colored
        >
            <Text>{textContent}</Text>
        </Layer>
    );
};

export default ChildComponent;
