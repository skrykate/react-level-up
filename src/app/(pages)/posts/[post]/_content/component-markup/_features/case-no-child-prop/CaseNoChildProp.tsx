'use client';

import { App } from '@/components/ui-examples/app';

import { ParentComponent } from './parent-component';

import type { FC } from 'react';

const CaseNoChildProp: FC = () => {
    return (
        <App
            title="NoChildProp"
            width={490}
        >
            <ParentComponent />
        </App>
    );
};

CaseNoChildProp.displayName = 'Example.CaseNoChildProp';

export default CaseNoChildProp;
