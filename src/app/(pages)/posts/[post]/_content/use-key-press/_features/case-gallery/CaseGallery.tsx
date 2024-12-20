'use client';

import { App } from '@/components/ui-examples/app';

import { Gallery } from './gallery';

import type { FC } from 'react';

const CaseGallery: FC = () => {
    return (
        <App
            title="Gallery"
            width={440}
        >
            <Gallery />
        </App>
    );
};

CaseGallery.displayName = 'Example.CaseGallery';

export default CaseGallery;
