'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseRandomValue: FC = () => {
    return (
        <App
            title="RandomValue"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseRandomValue.displayName = 'Example.CaseRandomValue';

export default CaseRandomValue;
