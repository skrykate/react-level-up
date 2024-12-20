'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseFormData: FC = () => {
    return (
        <App
            title="FormData"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseFormData.displayName = 'Example.CaseFormData';

export default CaseFormData;
