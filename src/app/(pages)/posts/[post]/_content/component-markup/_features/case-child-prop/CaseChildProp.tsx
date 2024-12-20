'use client';

import { App } from '@/components/ui-examples/app';

import { ParentComponent } from './parent-component';

import type { FC } from 'react';

const CaseChildProp: FC = () => {
    return (
        <App
            title="ChildProp"
            width={490}
        >
            <ParentComponent />
        </App>
    );
};

CaseChildProp.displayName = 'Example.CaseChildProp';

export default CaseChildProp;
