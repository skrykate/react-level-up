'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseMenu: FC = () => {
    return (
        <App
            title="Menu"
            width={360}
        >
            <Container />
        </App>
    );
};

CaseMenu.displayName = 'Example.CaseMenu';

export default CaseMenu;
