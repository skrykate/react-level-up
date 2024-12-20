'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseNotes: FC = () => {
    return (
        <App
            title="Notes"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseNotes.displayName = 'Example.CaseNotes';

export default CaseNotes;
