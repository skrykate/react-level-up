'use client';

import { App } from '@/components/ui-examples/app';

import { Scrollable } from './scrollable';

import type { FC } from 'react';

const CaseTodoList: FC = () => {
    return (
        <App
            title="TodoList"
            width={480}
        >
            <Scrollable />
        </App>
    );
};

CaseTodoList.displayName = 'Example.CaseTodoList';

export default CaseTodoList;
