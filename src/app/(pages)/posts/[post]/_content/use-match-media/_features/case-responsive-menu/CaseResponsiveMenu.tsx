'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseResponsiveMenu: FC = () => {
    return (
        <App
            title="ResponsiveMenu"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseResponsiveMenu.displayName = 'Example.CaseResponsiveMenu';

export default CaseResponsiveMenu;
