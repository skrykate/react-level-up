'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseResponsiveContainer: FC = () => {
    return (
        <App
            title="ResponsiveContainer"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseResponsiveContainer.displayName = 'Example.CaseResponsiveContainer';

export default CaseResponsiveContainer;
