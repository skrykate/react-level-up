import { Layer } from '@/components/ui-examples/layer';

import { Text } from '@/components/ui-typography-examples/text';

import type { FC } from 'react';

const MobileComponent: FC = () => {
    return (
        <Layer title="MobileComponent">
            <Text>
                I am the component displayed for devices with <b>phone</b>-sized
                screens
            </Text>
        </Layer>
    );
};
export default MobileComponent;
