'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CasePropDrilling: FC = () => {
    return (
        <App
            title="PropDrilling"
            width={620}
        >
            <Container />
        </App>
    );
};

CasePropDrilling.displayName = 'Example.CasePropDrilling';

export default CasePropDrilling;
