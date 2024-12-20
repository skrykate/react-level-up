'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseCounter: FC = () => {
    return (
        <App
            title="Counter"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseCounter.displayName = 'Example.CaseCounter';

export default CaseCounter;
