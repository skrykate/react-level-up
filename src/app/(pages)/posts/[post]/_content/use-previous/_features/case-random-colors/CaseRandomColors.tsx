'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseRandomColors: FC = () => {
    return (
        <App
            title="RandomColors"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseRandomColors.displayName = 'Example.CaseRandomColors';

export default CaseRandomColors;
