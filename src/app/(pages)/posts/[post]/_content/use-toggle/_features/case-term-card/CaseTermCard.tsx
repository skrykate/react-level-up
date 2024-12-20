'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseTermCard: FC = () => {
    return (
        <App
            title="TermCard"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseTermCard.displayName = 'Example.CaseTermCard';

export default CaseTermCard;
