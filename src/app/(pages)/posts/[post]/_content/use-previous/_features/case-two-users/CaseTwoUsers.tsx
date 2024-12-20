'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseTwoUsers: FC = () => {
    return (
        <App
            title="TwoUsers"
            width={510}
        >
            <Container />
        </App>
    );
};

CaseTwoUsers.displayName = 'Example.CaseTwoUsers';

export default CaseTwoUsers;
