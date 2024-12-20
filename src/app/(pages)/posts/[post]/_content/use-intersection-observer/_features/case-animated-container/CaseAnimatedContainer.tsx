'use client';

import { App } from '@/components/ui-examples/app';

import { Scrollable } from './scrollable';

import type { FC } from 'react';

const CaseAnimatedContainer: FC = () => {
    return (
        <App
            title="AnimatedContainer"
            width={480}
        >
            <Scrollable />
        </App>
    );
};

CaseAnimatedContainer.displayName = 'Example.CaseAnimatedContainer';

export default CaseAnimatedContainer;
