import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

import type { FC } from 'react';

const DesktopComponent: FC = () => {
    return (
        <Layer title="DesktopComponent">
            <Text>
                I am the component displayed for devices with <b>desktop</b>
                -sized screens
            </Text>
        </Layer>
    );
};

export default DesktopComponent;
