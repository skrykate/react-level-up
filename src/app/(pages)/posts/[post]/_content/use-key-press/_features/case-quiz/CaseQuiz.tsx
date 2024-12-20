'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseQuiz: FC = () => {
    return (
        <App
            title="Quiz"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseQuiz.displayName = 'Example.CaseQuiz';

export default CaseQuiz;
