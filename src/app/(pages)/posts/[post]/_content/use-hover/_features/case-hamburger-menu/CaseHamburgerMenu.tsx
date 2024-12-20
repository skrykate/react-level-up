'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseHamburgerMenu: FC = () => {
    return (
        <App
            title="HamburgerMenu"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseHamburgerMenu.displayName = 'Example.CaseHamburgerMenu';

export default CaseHamburgerMenu;
