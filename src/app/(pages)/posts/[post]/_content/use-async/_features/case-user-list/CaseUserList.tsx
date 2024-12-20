'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseUserList: FC = () => {
    return (
        <App
            title="UserList"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseUserList.displayName = 'Example.CaseUserList';

export default CaseUserList;
