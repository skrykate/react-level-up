'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseRestructured: FC = () => {
    return (
        <App
            title="Restructured"
            width={620}
        >
            <Container />
        </App>
    );
};

CaseRestructured.displayName = 'Example.CaseRestructured';

export default CaseRestructured;
