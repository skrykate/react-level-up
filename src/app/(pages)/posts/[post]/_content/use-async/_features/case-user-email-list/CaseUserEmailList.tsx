'use client';

import { App } from '@/components/ui-examples/app';

import { Container } from './container';

import type { FC } from 'react';

const CaseUserEmailList: FC = () => {
    return (
        <App
            title="UserEmailList"
            width={480}
        >
            <Container />
        </App>
    );
};

CaseUserEmailList.displayName = 'Example.CaseUserEmailList';

export default CaseUserEmailList;
