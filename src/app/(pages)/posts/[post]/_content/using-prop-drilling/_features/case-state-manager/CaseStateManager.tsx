'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseStateManager: FC = () => {
    return (
        <App
            title="StateManager"
            width={620}
        >
            <Container />
        </App>
    );
};

CaseStateManager.displayName = 'Example.CaseStateManager';

export default CaseStateManager;
