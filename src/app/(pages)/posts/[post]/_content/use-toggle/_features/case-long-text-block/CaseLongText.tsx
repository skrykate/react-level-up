'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseLongText: FC = () => {
    return (
        <App
            title="LongText"
            width={620}
        >
            <Container />
        </App>
    );
};

CaseLongText.displayName = 'Example.CaseLongText';

export default CaseLongText;
