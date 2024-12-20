import { Layer } from '@/components/ui-examples/layer';

import { DesktopComponent } from './desktop-component';
import { MobileComponent } from './mobile-component';
import { TabletComponent } from './tablet-component';

import { useMatchMedia } from '@/hooks/use-match-media';

import type { FC } from 'react';

const Container: FC = () => {
    const { isMobile, isTablet } = useMatchMedia();

    return (
        <Layer title="Container">
            {isMobile ? (
                <MobileComponent />
            ) : isTablet ? (
                <TabletComponent />
            ) : (
                <DesktopComponent />
            )}
        </Layer>
    );
};

export default Container;
