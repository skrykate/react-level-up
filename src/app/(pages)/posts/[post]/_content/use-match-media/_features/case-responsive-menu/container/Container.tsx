import { Layer } from '@/components/ui-examples/layer';

import { HamburgerMenu } from './hamburger-menu';
import { RegularMenu } from './regular-menu';

import { useMatchMedia } from '@/hooks/use-match-media';

import type { FC } from 'react';

const Container: FC = () => {
    const { isMobile } = useMatchMedia();

    return (
        <Layer title="Container">
            {isMobile ? <HamburgerMenu /> : <RegularMenu />}
        </Layer>
    );
};

export default Container;
