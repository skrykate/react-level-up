'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseContext: FC = () => {
    return (
        <App
            title="Context"
            width={620}
        >
            <Container />
        </App>
    );
};

CaseContext.displayName = 'Example.CaseContext';

export default CaseContext;
