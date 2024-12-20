'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CasePersonBio: FC = () => {
    return (
        <App
            title="PersonBio"
            width={510}
        >
            <Container />
        </App>
    );
};

CasePersonBio.displayName = 'Example.CasePersonBio';

export default CasePersonBio;
