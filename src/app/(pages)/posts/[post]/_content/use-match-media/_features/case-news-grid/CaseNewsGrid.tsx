'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseNewsGrid: FC = () => {
    return (
        <App
            title="NewsGrid"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseNewsGrid.displayName = 'Example.CaseNewsGrid';

export default CaseNewsGrid;
