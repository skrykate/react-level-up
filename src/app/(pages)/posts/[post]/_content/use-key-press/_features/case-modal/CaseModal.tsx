'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseModal: FC = () => {
    return (
        <App
            title="Modal"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseModal.displayName = 'Example.CaseModal';

export default CaseModal;
