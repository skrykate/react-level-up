'use client';

import { App } from '@/components/ui-examples/app';

import { Scrollable } from './scrollable';

import type { FC } from 'react';

const CaseLazyImage: FC = () => {
    return (
        <App
            title="LazyImage"
            width={480}
        >
            <Scrollable />
        </App>
    );
};

CaseLazyImage.displayName = 'Example.CaseLazyImage';

export default CaseLazyImage;
