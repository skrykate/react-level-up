import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

import type { FC } from 'react';

const TabletComponent: FC = () => {
    return (
        <Layer title="TabletComponent">
            <Text>
                I am the component displayed for devices with <b>tablet</b>
                -sized screens
            </Text>
        </Layer>
    );
};
export default TabletComponent;
