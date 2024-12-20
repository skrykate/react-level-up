'use client';

import { Layer } from '@/components/ui-examples/layer';

import { ParentComponent } from './parent-component';
import { DataButton } from './data-button';

import type { FC } from 'react';

const Container: FC = () => {
    return (
        <Layer
            title="Container"
            colored
        >
            <ParentComponent />
            <DataButton />
        </Layer>
    );
};

export default Container;
