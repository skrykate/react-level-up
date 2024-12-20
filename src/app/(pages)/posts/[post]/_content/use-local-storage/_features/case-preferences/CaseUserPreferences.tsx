'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseUserPreferences: FC = () => {
    return (
        <App
            title="UserPreferences"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseUserPreferences.displayName = 'Example.CaseUserPreferences';

export default CaseUserPreferences;
